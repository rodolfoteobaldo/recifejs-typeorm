import { createConnection, getConnectionOptions } from 'typeorm';

export const appConnection = async () => {
  const connectionOptions = await getConnectionOptions('development');
  return await createConnection({ ...connectionOptions, name: 'default' });
};
