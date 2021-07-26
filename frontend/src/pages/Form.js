import React, { useState, useEffect } from 'react';
import { AxiosInstance } from '../utils/Helpers'
import Button from '../components/elements/Button';
import CheckInput from '../components/elements/CheckInput';
import Complaint from '../components/elements/Complaint';
import FieldSet from '../components/elements/FieldSet';
import Input from '../components/elements/Input'
import Select from '../components/elements/Select'
import RadioInput from '../components/elements/RadioInput';
import Title from '../components/layout/Title';

const Form = (
  { setSaving, setError, saving, setErrorMessage, setSuccess }
) => {
  const priority = [3, 2, 1];
  const [users, setUsers] = useState([]);
  const [addCopyfield, setAddCopyfield] = useState(0);
  const [form, setForm] = useState({
    user:"",
    priority: "",
    complaint: "",
    title: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await AxiosInstance("users");
      setUsers([...res.data]);
    }
    fetchData();
  }, []);

  const formattedDate = () => {
    const date = new Date();
    return date.toString().substring(0, 15);
  };

  const onSubmitForm = (event) => {
    let timer = null;
    event.preventDefault();
    if (!form.title || !form.complaint || !form.priority || !form.user) {
      setErrorMessage("Please fill in all fields");
      return setError(true);
    }
    
    form.date = formattedDate();
    setSaving(true);
    new Promise((resolve) => {
      timer = setTimeout(() => {
        resolve(true);
      }, 1000);
    }).then(() => {
      AxiosInstance.post(`tickets`, {
        form: form
      })
    .catch( error => console.log(error) )
      setSaving(false);
      setSuccess(true);
      return () => clearTimeout(timer);
    });
  };

  const onHandleCopyfield = () => {
    if (addCopyfield <= 5) {
      setAddCopyfield((pS) => pS + 1);
    }
  };

  const onHandleFormElement = (event) => {
    const { name, value } = event.target;
    setForm((pS) => ({
      ...pS,
      [name]: value,
    }));
  };

  return (
    <>
      
        <Title>
          <h1>Contact Us</h1>
        </Title>
  
        <form onSubmit={onSubmitForm} style={
              ({ marginBottom: "3rem", width: '100%' })}>
          
            <FieldSet>
              <p>Ticket information</p>
              <legend className="sr-only">Ticket information</legend>
              <Input
                type="text"
                name="title"
                placeholder="Title"
                onChange={onHandleFormElement}
                className="form-input"
                required={true}
              />

              <Input
                type="text"
                name="customerid"
                placeholder="Case-id of customer"
                disabled={true}
                onChange={onHandleFormElement}
                className="form-input"
              />

              <Input
                type="text"
                required={true}
                name="copy"
                placeholder="Send copy to"
                onChange={onHandleFormElement}
                className="form-input"
              />

              {addCopyfield > 0 && (
                <div>
                  {[...Array(addCopyfield)].map((_, index) => {
                    return (
                      <Input
                        index={index}
                        type="text"
                        required={true}
                        name="copy"
                        placeholder="Send copy to"
                        onChange={onHandleFormElement}
                        className="form-input"
                      />
                    );
                  })}
                </div>
              )}
              <Button styleP="naked" onClickP={onHandleCopyfield}>
                <p>add new field +</p>
              </Button>
            </FieldSet>
       
        
            <FieldSet>
              <p>Set Priority</p>
              <legend className="sr-only">Set Priority</legend>
              <RadioInput
                typeP="radio"
                nameP="priority"
                onChangeP={onHandleFormElement}
                priority={priority}
              ></RadioInput>
            </FieldSet>

          
            <Complaint>
              <p>What's your gripe?</p>
              <legend className="sr-only">What's your gripe?</legend>
              <Input
                type="textarea"
                name="complaint"
                onChange={onHandleFormElement}
                required={true}
                id="complaint"
              />
              <CheckInput
                type="checkbox"
                name="receive-copy"
                onChange={onHandleFormElement}
                checked={null}
              >
                <>I want to receive a copy</>
              </CheckInput>
            </Complaint>
        
            <FieldSet>
              <p>Reported by:</p>
              <legend className="sr-only">Reported by:</legend>
              <Select
                name="user"
                onChange={onHandleFormElement}
                text="-- Reporter --"
              >
                {users.length > 0 &&
                  users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.name}
                    </option>
                  ))}
              </Select>
            </FieldSet>
     
         
            <Button onClickP={onSubmitForm} disabled={saving ? true : false}  styleP={saving ? "disabled" : "primary"} type="submit">
              <p>Submit</p>
            </Button>
            <Button styleP="secondary" type="button">
              <p>Reset</p>
            </Button>
        
        </form>
   
    </>
  );
};

export default Form;
