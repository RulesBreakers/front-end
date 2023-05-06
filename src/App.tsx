import { ThemeProvider } from '@mui/material';
import { RootComponents, RootComponentsBackground } from './common/components';
import { theme } from './common/utils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Landing } from './pages/landing';
import Chatterbox from './pages/chat-box/Chatterbox';

function App() {
  return (
    <>
      <RootComponentsBackground />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Chatterbox />} />
          </Routes>
        </BrowserRouter>
        <RootComponents />
      </ThemeProvider>
    </>
  );
}

export default App;
