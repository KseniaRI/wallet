import { lazy } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

const DashboardPage = lazy(() => import('../pages/dashboardPage/DashboardPage'));
const HomeTab = lazy(() => import('./homeTab/HomeTab'));
const DiagramTab = lazy(() => import('../components/diagramTab/DiagramTab'));
const RegistrationPage = lazy(() => import('../pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));
const AuthLayout = lazy(() => import('../pages/authLayout/AuthLayout'))

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route index element={<LoginPage />}/>
        <Route path='register' element={<RegistrationPage />} />
      </Route>
      <Route path='/dashboard' element={<DashboardPage />}>
            <Route path='home' element={<HomeTab />} />
            <Route path='diagram' element={<DiagramTab />} />
      </Route>
          {/* <Route path='/' element={<DashboardPage />}>
              <Route index element={<HomeTab />} />
              <Route path='diagram' element={<DiagramTab />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegistrationPage />} />
          </Route> */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
