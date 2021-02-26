import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Home, CreatePost, UpdatePost, Post,
} from '../../pages';

function AppRouting() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new-post" component={CreatePost} />
      <Route exact path="/edit-post/:id" component={UpdatePost} />
      <Route exact path="/post/:id" component={Post} />
      <Route path="/" render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default AppRouting;
