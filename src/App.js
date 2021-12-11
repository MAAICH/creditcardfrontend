import "./App.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/home";
import NavBar from "./components/navbar";
import About from "./components/about";
import ContactUs from "./components/contactus";
import Login from "./components/login";
import user from "./components/user";
import Cart from "./components/cart";
import PageNotFound from "./components/pagenotfound";
import Customer from "./components/customer";
import addcustomer from "./components/addcustomer";
import adduser from "./components/adduser";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/customer' component={Customer} />
                <Route exact path='/customer/add' component={addcustomer} />
                <Route exact path='/users/add' component={adduser} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contactus' component={ContactUs} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/user' component={user} />
                <Route exact path='/cart' component={Cart} />
                <Redirect exact path='/' to='/home'/>
                <Route component={PageNotFound}/>
            </Switch>
        </Router>
    );
}

export default App;