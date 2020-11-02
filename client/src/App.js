import React, { useContext } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import moment from "moment"
import Login from "./pages/Login";
import Members from "./pages/Members";
import Profile from "./pages/Profile";
import Container from "./components/Container";
import Header from "./components/Header";
import Axios from 'axios';
import Register from './pages/Register';
import HoursTable from './components/HoursTable';
import PrintHours from "./pages/PrintHours";


function App() {
  const { isAuth, setIsAuth, isAdmin } = useContext(AuthContext);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  // const AdminRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={props =>
  //       isAdmin ? <Component {...props} /> : <Redirect to="/" />
  //     }
  //   />
  // );

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
        console.log("clockinInfo =", clockinInfo)
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
            render={props => isAuth ? <Home
              allUsers={users}
              clockedInUsers={clockedIn}
              clockInFunc={clockInFunc}
              {...props} /> : <Redirect to="/login"/>}
          />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/profile/:code" render={props => isAuth ? <Profile allUsers={users} {...props} /> : <Redirect to="/login" />} />
          <Route exact path="/register" render={props => isAuth ? <Register {...props} /> : <Redirect to="/login"/>} />

          {/* <AdminRoute exact path="/print" render={props => <PrintHours {...props} />} /> */}
          <Route exact path="/print" render={props => isAuth ? <PrintHours {...props}/> : <Redirect to ="/login" />} />
          <PrivateRoute exact path="/members" component={Members} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}


// <Route
//       {...rest}
//       render={props =>
//         isAuth ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
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
