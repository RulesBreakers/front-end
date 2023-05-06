import { ThemeProvider } from '@mui/material';
import { RootComponents, RootComponentsBackground } from './common/components';
import { theme } from './common/utils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Landing } from './pages/landing';

function App() {
  return (
    <>
      <RootComponentsBackground />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
        <RootComponents />
      </ThemeProvider>
    </>
    );
}

export default App;
