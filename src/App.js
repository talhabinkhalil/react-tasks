import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { Button } from 'react-bootstrap';
import MainScreen from './components/mainScreen';

function App() {
  return (
    <div>
      <MainScreen />
    </div>
  );
}

export default App;
