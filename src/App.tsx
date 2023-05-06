import { ThemeProvider } from '@mui/material';
import { RootComponents } from './common/components';
import { theme } from './common/utils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import ChatBox from "./pages/chat-box/Chatterbox";
import Chatterbox from "./pages/chat-box/Chatterbox";
import Footer from "./pages/footer/footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Chatterbox />} />
            <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
      <RootComponents />
    </ThemeProvider>
  );
}

export default App;
