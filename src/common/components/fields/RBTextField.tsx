import { IconButton, TextField } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';
import { RBTextFieldProps } from './type';

export const RBTextField = ({
  label,
  name,
  validator,
  validate = true,
  icon,
  type = 'text',
  onClickIcon,
}: RBTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const record = useWatch();

  return (
    <TextField
      type={type}
      sx={{
        '.MuiInputBase-root': {
          padding: 0,
          textAlign: 'right',
        },
        '.MuiInputBase-input': {
          paddingLeft: '3rem',
        },
        '.MuiIconButton-root': {
          position: 'absolute',
          left: '0.4rem',
          background: 'inherit',
        },
        'MuiTouchRipple-root': {
          border: 'none !important',
          outline: 'none !important',
        },
      }}
      variant='outlined'
      label={label}
      {...register(name, {
        validate: validate ? validator : false,
        required: validate && !validator && 'Ce champ est requis.',
      })}
      value={record[name] || ''}
      InputProps={{
        startAdornment: <IconButton onClick={onClickIcon}>{icon}</IconButton>,
      }}
      // error section
      error={!!errors[name]}
      helperText={errors[name] && (errors[name]?.message as string)}
    />
  );
};
