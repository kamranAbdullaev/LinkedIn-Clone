import uuid from 'react-uuid'

export const getUniqueId = () => {
  let id = uuid();

  return id;
}
