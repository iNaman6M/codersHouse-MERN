import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authentication/Authenticate';

const isAuth = true;

function App() {
  return (
   <BrowserRouter>
    <Navigation />
      <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <GuestRoute to='/authenticate'>
            <Authenticate />
          </GuestRoute>
          
      </Switch>
   </BrowserRouter>
  );
}

//creating protected routes
const GuestRoute = ({children,...rest}) => {
  return ( 
    <Route {...rest}
      render={({location}) => {
        return isAuth ? 
        <Redirect to={
            {
              pathname: '/rooms',
              state: {from: location}
            }
        }
        />
        :
        (
          children
        );
      }}        
    > 

  </Route>

  );
}


export default App;




//  <Route path='/register'>
//             <Register />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route> 
//            <Route path='/authenticate'>
//             <Authenticate />
//           </Route> 
