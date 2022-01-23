import './App.css';
import { Switch, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/" exact component={LoginView} />
        <Route path="/register" exact component={RegisterView} />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
