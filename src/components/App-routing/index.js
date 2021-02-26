import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Home, CreatePost, UpdatePost, Post,
} from '../../pages';

import Layout from '../Layout';

function AppRouting() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-post" component={CreatePost} />
        <Route exact path="/edit-post/:id" component={UpdatePost} />
        <Route exact path="/post/:id" component={Post} />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Layout>
    </Switch>
  );
}

export default AppRouting;
