import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import { HomePage } from './pages/HomePage/HomePage';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage/>}/>
          {/* <Route path="/first" element={<FirstPage />} /> */}
          {/* <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
