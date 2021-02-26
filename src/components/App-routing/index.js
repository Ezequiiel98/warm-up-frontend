import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';

function AppRouting() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/" render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default AppRouting;
