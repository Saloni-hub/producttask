
import './App.css';
import Home from './components/Home'
import Login from './components/LgginSignup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './components/signup';
import Product from './components/Products';
function App() { 
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/signup" component={Signup} />
            <Route path="/product" component={Product} />

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
