
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Apointment from './Components/Pages/Apointment/Apointment';
import ConsultantProfile from './Components/Pages/ConsultantProfile/ConsultantProfile';
import Consultant from './Components/Pages/Home/Consultant/Consultant';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Signin from './Components/Pages/Signin/Signin';
import SignUp from './Components/Pages/SignUp/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Shared/Footer/Footer';
import FooterBottom from './Components/Shared/FooterBottom/FooterBottom';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service/:serviceId" component={ServiceDetails}>
              <ServiceDetails></ServiceDetails>
            </Route>
       
            <Route path="/consultant/:consultantId">
              <ConsultantProfile></ConsultantProfile>
            </Route>
            <PrivateRoute path="/apointment">
              <Apointment></Apointment>
            </PrivateRoute>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
          <FooterBottom></FooterBottom>
        </Router>
        
      </AuthProvider>
    </div>
  );
}

export default App;
