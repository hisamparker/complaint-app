import React, {useEffect} from "react";
import { AxiosInstance } from '../../src/utils/Helpers'
import ListCards from '../components/layout/ListCards'

const Dashboard = ({tickets, setTickets}) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await AxiosInstance("tickets");
      setTickets([...res.data]);
    }
    fetchData();
  
  }, []);// eslint-disable-line

  return (
    <>     
      {tickets.length > 0 && <ListCards tickets={tickets} /> }      
    </>
  );
};

export default Dashboard;
