import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../..';
import { paths } from '../../consts';
import { authRoutes, publicRoutes } from '../../routes';

const AppRouter = () => {
  const { user } = useContext(Context);
  const { isAuth } = user;
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route component={Component} path={path} exact key={path} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route component={Component} path={path} exact key={path} />
      ))}
      <Redirect to={paths.SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
