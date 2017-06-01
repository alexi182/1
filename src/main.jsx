import './vendors';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import MainLayout from './layouts/main';
import IndexPage from './pages/index';
import BlogsPage from './pages/blogs';
import UsersPage from './pages/users';
import UserPage from './pages/user';
import NotFoundPage from './pages/notfound';

let app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={IndexPage} />
            <Route path="/blogs" component={BlogsPage} />
            {/*<Route path="/users(/:userId)" component={UsersPage} />*/}
            <Route path="/users" component={UsersPage}>
                <Route path=":userId" component={UserPage} />
            </Route>
            <Route path="/notfound" component={NotFoundPage} />
            <Redirect from="*" to="/notfound" />
        </Route>
    </Router>
    , app);