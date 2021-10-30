
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AllBooking from './Components/Pages/AllBooking/AllBooking';
import Home from './Components/Pages/Home/Home';
import MyBooking from './Components/Pages/MyBooking/MyBooking';
import NotFound from './Components/Pages/NotFound/NotFound';
import OrderReceived from './Components/Pages/OrderReceived/OrderReceived';
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
            <PrivateRoute path="/order-received/:serviceId">
              <OrderReceived></OrderReceived>
            </PrivateRoute>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/all-booking">
              <AllBooking></AllBooking>
            </Route>
            <Route path="/my-booking">
              <MyBooking></MyBooking>
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
