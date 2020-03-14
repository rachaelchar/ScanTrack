import React, { useContext } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import moment from "moment"
import Login from "./pages/Login";
import Members from "./pages/Members";
import Profile from "./pages/Profile";
import Container from "./components/Container";
import Header from "./components/Header";
import Axios from 'axios';

function App() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

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
          time: moment().format('HH:mm:ss'),
          week_num: moment(moment().format('L'), 'MM/DD/YYYY').week(),
          year: moment().format('YYYY-MM-DD'),
        };
        console.log(clockinInfo)
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
          clockin: {
            employee_id: response.id,
            working_status_id: response.working_status_id,
            time: response.time,
            week_num: response.week_num,
            year: response.year
          },
        })
          .then(res => {
            setClockedIn(res.data)
          });
        return response;
      })
      .then((response) => {

      })
      .catch((err) => {
        throw (err);
      });
  }

  return (
    <>
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
          <Route exact path="/profile/:code" render={props => <Profile allUsers={users} {...props} />} />
          <Route exact path="/home" render={props => <Signup {...props} />} />
          <PrivateRoute exact path="/members" component={Members} />
          <PrivateRoute exact path="/profile" component={Profile} />

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
      <Header />
      <App />
    </AuthProvider>
  );
};
