import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const DashboardPage = lazy(() => import('../pages/dashboardPage/DashboardPage'));
const Home = lazy(() => import('../components/home/Home'));
const DiagramTab = lazy(() => import('../components/diagramTab/DiagramTab'));
const RegistrationPage = lazy(() => import('../pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'))
export const App = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);


  return (
    <Routes>
      <Route path='/register' element={<RegistrationPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardPage />}>
         <Route path='home' element={<Home />} />
         <Route path='diagram' element={<DiagramTab/>} />
      </Route>
    </Routes>
  );
};
