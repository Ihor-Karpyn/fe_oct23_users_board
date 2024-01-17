import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import './App.scss';
import { UserList } from './components/UserList';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
import { Color, User, UserWithColor } from './types';
import { prepareUsers } from './helpers';
import { usersApi } from './api/users.api';
import { colorsApi } from './api/colors.api';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [colors, setColoros] = useState<Color[]>([]);

  const usersWithColors = useMemo(
    () => prepareUsers(users, colors),
    [users, colors],
  );

  useEffect(
    () => {
      usersApi.get().then(setUsers);
      colorsApi.get().then(setColoros);
    },
    [],
  );

  const addUser = useCallback(async (name: string, carColorId: number) => {
    const newUser = await usersApi.create({
      name,
      carColorId,
    });

    setUsers((prev) => [...prev, newUser]);
  }, []);

  return (
    <AppContainer>
      <UserList users={usersWithColors} />

      <AddUserForm colors={colors} addUser={addUser} />
    </AppContainer>
  );
};
