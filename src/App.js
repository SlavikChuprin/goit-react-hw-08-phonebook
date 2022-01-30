import './App.css';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from 'react-loader-spinner';

const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const Contacts = lazy(() => import('./components/Contacts'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Suspense fallback={<Loader type="Circles" color="lightblue" />}>
          <PublicRoute path="/" exact restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PublicRoute path="/registration" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PrivateRoute path="/contacts" exact redirectTo="/">
            <Contacts />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
