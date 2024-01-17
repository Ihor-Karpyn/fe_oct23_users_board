import React, { FC, useState } from 'react';
import {
  Divider, MenuItem, Select, TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Color } from '../types';

interface Props {
  colors: Color[];
  addUser: (name: string, carColorId: number) => Promise<void>;
}

export const AddUserForm: FC<Props> = React.memo(({ colors, addUser }) => {
  const [name, setName] = useState('');
  const [colorId, setColorId] = useState(0);
  const [isNameError, setIsNameError] = useState(false);
  const [isColorError, setIsColorError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedColor = colors.find(c => c.id === colorId);

  const onSubmit = async () => {
    if (!name || !colorId) {
      setIsNameError(!name);
      setIsColorError(!colorId);

      return;
    }

    setIsLoading(true);

    try {
      await addUser(name, colorId);

      setName('');
      setColorId(0);
    } catch (e) {
      window.alert(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Divider />

      <div style={{
        padding: '16px 0 16px', display: 'flex', alignItems: 'end', justifyContent: 'space-between',
      }}
      >
        <TextField
          variant="standard"
          label="Name"
          style={{ width: '45%' }}
          value={name}
          onChange={e => {
            setName(e.target.value);
            setIsNameError(false);
          }}
          error={isNameError}
          disabled={isLoading}
        />

        <Select
          label="Car color"
          style={{ width: '45%', color: selectedColor?.name || 'currentColor' }}
          variant="standard"
          value={colorId}
          onChange={e => {
            setIsColorError(false);
            setColorId(+e.target.value);
          }}
          error={isColorError}
          disabled={isLoading}
        >
          <MenuItem value={0} disabled>
            Color
          </MenuItem>
          {colors.map(color => (
            <MenuItem
              key={color.id}
              style={{ color: color.name }}
              value={color.id}
            >
              {color.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <LoadingButton
        type="submit"
        variant="outlined"
        style={{ width: '100%' }}
        loading={isLoading}
      >
        Add new player
      </LoadingButton>
    </form>
  );
});
