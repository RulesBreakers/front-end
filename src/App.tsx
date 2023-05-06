import { ThemeProvider } from '@mui/material';
import { RootComponents, RootComponentsBackground } from './common/components';
import { theme } from './common/utils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootComponentsBackground />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <RootComponents />
    </ThemeProvider>
  );
}

export default App;
