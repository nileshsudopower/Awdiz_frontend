import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import UseState from './25-05/Usestate';
import UseEffect from './26-05/UseEffect';
import UseEffect1 from './26-05/UseEffect1';
import Login from './23-05/Login';
import Mens from './23-05/Mens';
import Profile from './23-05/Profile';
import UseEffect3 from './29-05/UseEffect3';
import Mapping from './02-06/Mapping';
import AllProducts from './02-06/AllProducts';
import Routing from './30-05/Routing';
import UserDetails from './30-05/UserDetails';
import CounterUsingFP from './04-06/CounterusingFP';
import FunctionProp from './04-06/FunctionProp';
import StyledComponents from './04-06/StyledComponents';
import InlineStyling from './04-06/InlineStyle';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/use-state" element={<UseState/>} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect1" element={<UseEffect1/>} />
        <Route path="/use-effect3" element={<UseEffect3/>} />
        <Route path="/use-navigate" element={<Routing />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route
          path="/mapping"
          element={<Mapping students={["Nilesh", "Chetan", "Rupali" , "Furkan"]} />}
        />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/counter-pf" element={<CounterUsingFP />} />
        <Route path="/function-prop" element={<FunctionProp />} />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/inline-styles" element={<InlineStyling />} />
      </Routes>
    </div>
  );
}

export default App;
