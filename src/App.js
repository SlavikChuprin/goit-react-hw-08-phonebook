import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

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
