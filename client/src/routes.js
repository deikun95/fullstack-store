import { paths } from './consts';
import AdminPage from './pages/AdminPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import DevicePage from './pages/DevicePage';
import ShopPage from './pages/ShopPage';

export const authRoutes = [
  {
    path: paths.ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: paths.CART_ROUTE,
    Component: CartPage,
  },
];

export const publicRoutes = [
  {
    path: paths.DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
  {
    path: paths.LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: paths.REGISTRATION_ROUTE,
    Component: AuthPage,
  },
  {
    path: paths.SHOP_ROUTE,
    Component: ShopPage,
  },
];
