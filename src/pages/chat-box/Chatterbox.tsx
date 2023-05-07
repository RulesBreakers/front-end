import { Box } from '@mui/material';
import { container } from './style.ts';
import './style.css';
const Chatterbox = () => {
  return (
    <Box sx={container}>
      <div className='chat-container'></div>
      <div className='input-container'></div>
    </Box>
  );
};

export default Chatterbox;
