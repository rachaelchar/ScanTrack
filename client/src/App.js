import React, { useContext } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import moment from "moment"
import Login from "./pages/Login";
import Members from "./pages/Members";
import Container from "./components/Container";
import Header from "./components/Header";
import Dummy from "./pages/Dummy";
import Axios from 'axios';

// Even though this is the App.js file, in the end we are not exactly exporting
// the App component.  We actually set up the app component to implement our react
// router, but in the end we export App wrapped in the context provider

function App() {
  // Here we subscribe the authentication context using the useContext hook
  // we use isAuth to determine whether the user is logged in, and setIsAuth
  // to change their status on logout.
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

  // here we are ceating a private route wrapper to prevent front end routing to 
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing 
  // props, but using object destucturing.  the ...rest is literally the rest of 
  // the props that were not destructured. 
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );


  const [users, setUsers] = React.useState([]);
  const [clockedIn, setClockedIn] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`/api/employees`)
      .then(res => {
        setUsers(res.data)
        setClockedIn(res.data.filter(employee => employee.working_status_id === 1))
      })
  }, [])

  const clockInFunc = code => {
    Axios.get(`/api/employees/?code=${code}`)
      .then(res => {
        const targetUser = res.data;
        if (targetUser === null) {
          return 'Invalid Scan';
        }
        const clockinInfo = {
          id: targetUser.id,
          working_status_id: targetUser.working_status_id,
          status: targetUser.working_status.status,
          time: moment().format('HH:MM:SS'),
          week_num: moment(moment().format('L'), 'MM/DD/YYYY').week(),
          year: moment().format('YYYY-MM-DD'),
        };

        return clockinInfo;
      })
      .then((response) => {

        if (response === false) {
          return response;
        }

        let newStatus = 2;
        if (response.working_status_id === 2 || response.working_status_id === 3) {
          newStatus = 1;
        }

        Axios.put('/api/employees/clockin', {
          id: response.id,
          working_status_id: newStatus,
        })
          .then(res => {
            setClockedIn(res.data)
          });
      })
      .catch((err) => {
        throw (err);
      });
  }

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home
              allUsers={users}
              clockedInUsers={clockedIn}
              clockInFunc={clockInFunc}
              {...props} />}
          />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/signup" render={props => <Signup {...props} />} />
          {/* Dummy page route below */}
          <Route exact path="/dummy" render={props => <Dummy {...props} />} />
          <Route exact path="/home" render={props => <Signup {...props} />} />
          <PrivateRoute exact path="/members" component={Members} />
        </Switch>
      </Router>
    </>
  );
}

// Here we export the final product of our app/context configuration, and
// even though it is unnamed here, it will be imported as App in index.js
export default () => {
  return (
    <AuthProvider>
      <Container />
      <App />
    </AuthProvider>
  );
};
