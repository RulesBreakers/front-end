import { BoyTwoTone } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import './card-style.css';

export const Tarif = () => {
  // const matches = useMediaQuery('(min-width:900px)');

  return (
    <div className='layout-container'>
      <div className='card'>
        <div className='card-title'>
          <h3>Juste rêvons</h3>
        </div>
      </div>
      <div className='card-content'>
        <Stack>
          <IconButton>
            <BoyTwoTone />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};
