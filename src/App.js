import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import Doctors from './components/Pages/Doctors/Doctors';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/Pages/About/About';
import Appointment from './components/Pages/Appointment/Appointment';
import Login from './components/Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/doctors">
          <Doctors></Doctors>

        </Route>
        <Route path="/about">
          <About></About>
          
        </Route>
        <Route path="/appointment/:imgID">
            <Appointment></Appointment>
          </Route>
        <Route path="/login">
            <Login></Login>
          </Route>
        <Route path="/home">
          <Home></Home>

        </Route>
      </Switch>
      
      
      
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;