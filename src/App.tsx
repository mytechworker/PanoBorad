import { Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Cookies from 'js-cookie';

import ROUTES from 'routes';
import { LocationData, RouteModel, User } from 'types';
import { DashboardLayout, AuthLayout } from 'layouts';

import connectHelper from 'helpers/connect.helper';
import { useEffect } from 'react';
import {
  locationAction,
  managementAction,
  profileAction,
  integrationAction,
} from 'redux/actions';
import { useSelector } from 'react-redux';
import { profileSelector } from 'redux/selectors';

import GlobalStyle from './global.styles';
import { logoutUser } from 'config/axios.config';

const connect = connectHelper(() => ({}));

function RouteWithSubRoutes(route: RouteModel) {
  const history = useHistory();
  return (
    <>
      <GlobalStyle />
      {/* TODO; Handle Share page here */}
      {route.authorized ? (
        <DashboardLayout history={history}>
          <Route
            path={route.path}
            render={(props: any) => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        </DashboardLayout>
      ) : (
        <AuthLayout>
          <Route
            path={route.path}
            render={(props: any) => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        </AuthLayout>
      )}
    </>
  );
}

type Props = {
  promise?: any;
};

function App({ promise }: Props) {
  const refreshToken = Cookies.get('refresh_token_pb');

  useEffect(() => {
    if (!refreshToken) return;
    Promise.all([
      promise(profileAction.getProfile()),
      promise(managementAction.getPermission()),
      promise(locationAction.loadAll()).then((locations: LocationData) => {
        if (locations?.count < 1) return logoutUser();
      }),
    ]);
  }, []);

  const { data, fetching } = useSelector(profileSelector.selectProfile);

  const handleLimitMenus = (permissionId: number): boolean => {
    if (permissionId === 0) return true;
    return !!data?.permissions.find((id) => permissionId === id);
  };

  return (
    <Suspense fallback={() => {}}>
      <Router>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Switch>
          {ROUTES.filter((route) => handleLimitMenus(route.permission)).map(
            (route) => (
              <RouteWithSubRoutes key={route.slug} {...route} />
            )
          )}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default connect(App);
