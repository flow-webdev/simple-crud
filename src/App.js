import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//npm install react-router-dom

function App() {
  return (

    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <ListEmployeeComponent />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;


// Inside Switch we confgure Routes
// header and footer are outside the switch because are applicable
// to all the components