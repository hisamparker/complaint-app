import React, { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./theme/GlobalStyles";
import { Switch, Route } from "react-router-dom";
import {lightTheme, darkTheme} from './theme/useTheme';
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Landing from "./pages/Landing";
import NotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Toast from "./components/layout/Toast";
import Form from "./pages/Form";
import Register from "./pages/Register";
import Login from './pages/Login';
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./components/layout/PrivateRoute";

function App() {
  // move all the error and saving stuff into context
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // The function that toggles between themes
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    let timer = '';
    new Promise(() => {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }).then(() => {
      return () => clearTimeout(timer);
    });
 }, [success]);
  
 useEffect(() => {
    let timer = '';
    new Promise(() => {
      timer = setTimeout(() => {
        setError(false);
      }, 3000);
    }).then(() => {
      return () => clearTimeout(timer);
    });
 }, [error]);

 const handleDismiss = () => {
  success ? setSuccess(false) : error && setError(false);
};

  return (
    <AuthContextProvider>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme}> 
        <NavBar theme={theme} 
          onChange={toggleTheme} 
          setError={setError}
          setErrorMessage={setErrorMessage}
          setSuccess={setSuccess}
          setSuccessMessage={setSuccessMessage} />
        </Header>
        <main style={{ minHeight: "85vh" }}>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard setTickets={setTickets} tickets={tickets} />
            </PrivateRoute>
            <Route path="/register">
              <Register 
                setSuccessMessage={setSuccessMessage}
                setSaving={setSaving}
                setError={setError}
                setErrorMessage={setErrorMessage}
                setSuccess={setSuccess}/>
            </Route>
            <Route path="/login" render={(props) => <Login 
                setSaving={setSaving}
                setSuccessMessage={setSuccessMessage}
                setError={setError}
                setErrorMessage={setErrorMessage}
                setSuccess={setSuccess} {...props}/>}/>
            <Route path="/form">
              <Form
                saving={saving}
                tickets={tickets}
                setSaving={setSaving}
                setError={setError}
                setErrorMessage={setErrorMessage}
                setSuccess={setSuccess}
                setSuccessMessage={setSuccessMessage}
                setTickets={setTickets}
              ></Form>
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {saving && <p>saving...</p>}
          {/* {error === true || success === true ? ( */}
            <Toast dismissOnClick={error && handleDismiss}
              classNameP={success ? "success" : error ? "error" : "hidden"}
            >
              {success ? successMessage : errorMessage}
            </Toast>
          {/* ) : null} */}
        </main>
        <Footer>
        &copy; WEB DEV 0321 | Iron Hack
        </Footer>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;


