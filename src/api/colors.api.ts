import { client } from './fetchClient';
import { Color } from '../types';

const get = () => client.get<Color[]>('/colors');

export const colorsApi = {
  get,
};
