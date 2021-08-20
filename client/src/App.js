import './App.css';
import ApplyCoupon from './components/ApplyCoupon.jsx'
import Coupons from './components/Coupons.jsx'
import AddCoupon from './components/AddCoupon.jsx'
import Home from './components/Home.jsx'
import Nav  from './components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      {/* <Switch> */}
      <Route path = "/apply-coupon" component = {ApplyCoupon} />
        <Route path = "/" component = {Home} />
        
        <Route path = "/coupons" component = {Coupons} />
        <Route path = "/add-coupon" component = {AddCoupon} />
      {/* </Switch> */}
      </div>
    </Router>  
  );
}

export default App;
