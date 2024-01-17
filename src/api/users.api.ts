import { client } from './fetchClient';
import { User } from '../types';

const get = () => client.get<User[]>('/users');

const create = (createValues: Pick<User, 'name' | 'carColorId'>) => {
  return client.post<User>('/users', createValues);
};

export const usersApi = {
  get,
  create,
};
