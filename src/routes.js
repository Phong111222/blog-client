import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import PostDetail from './components/PostDetail';
import Register from './components/Register';
import Logout from './components/Logout';
import ChangePassword from './components/ChangePassword';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import ChangePasswordSuccess from './components/ChangePassword/Success';
import InputEmail from './components/EmailForgotPassword';
import UpdatePassword from './components/UpdatePassword';

const routes = [
  {
    path: '/',
    exact: true,
    component: (props) => <Login {...props} />,
  },
  {
    path: '/register',
    exact: false,
    component: (props) => <Register {...props} />,
  },
  {
    path: '/HomePage',
    exact: false,
    component: (props) => <HomePage {...props} />,
  },
  {
    path: '/post/:id',
    exact: false,
    component: (props) => <PostDetail {...props} />,
  },
  {
    path: '/logout',
    exact: false,
    component: (props) => <Logout {...props} />,
  },
  {
    path: '/ChangePassword',
    exact: false,
    component: (props) => <ChangePassword {...props} />,
  },
  {
    path: '/UpdatePassword',
    exact: false,
    component: (props) => <UpdatePassword {...props} />,
  },
  {
    path: '/CreatePost',
    exact: false,
    component: (props) => <CreatePost {...props} />,
  },
  {
    path: '/EditPost',
    exact: false,
    component: (props) => <EditPost {...props} />,
  },
  {
    path: '/ChangePasswordSuccess',
    exact: false,
    component: (props) => <ChangePasswordSuccess {...props} />,
  },
  {
    path: '/ForgotPassword',
    exact: false,
    component: (props) => <InputEmail {...props} />,
  },
];

const MakeRoutes = (props) => {
  return (
    <div className='Routes'>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default MakeRoutes;
