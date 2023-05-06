import { Box } from '@mui/material';
import { CircleProps } from '.';

export const Circle = (props: CircleProps) => {
  const { color, size, bottom, left, right, top, sx } = props;

  return (
    <Box
      sx={{
        ...sx,
        width: size,
        height: size,
        borderRadius: '50%',
        position: 'absolute',
        left,
        top,
        bottom,
        right,
        background: color,
      }}
    ></Box>
  );
};
