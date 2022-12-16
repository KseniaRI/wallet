import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { Loader } from './loader/Loader';
import { CurrencyTab } from './currencyTab/CurrencyTab';

const DashboardPage = lazy(() => import('../pages/dashboardPage/DashboardPage'));
const HomeTab = lazy(() => import('./homeTab/HomeTab'));
const DiagramTab = lazy(() => import('../components/diagramTab/DiagramTab'));
const RegistrationPage = lazy(() => import('../pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));
const AuthLayout = lazy(() => import('../pages/authLayout/AuthLayout'));

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return  (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<PublicRoute restricted component={<LoginPage />}/>} />
          <Route path='register' element={<PublicRoute restricted component={<RegistrationPage />}/>}  />
        </Route>
        <Route path='/dashboard' element={<PrivateRoute component={<DashboardPage />} />}>
          <Route path='home' element={<HomeTab />} />
          <Route path='diagram' element={<DiagramTab />} />
          <Route path='currency' element={<CurrencyTab/>} />
        </Route>
        <Route path="*" element={<LoginPage/>} />
      </Routes>
    </Suspense> 
  );
};
