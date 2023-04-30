import axios from 'axios';

const cardsInstance = axios.create({
  baseURL: 'https://63c18411376b9b2e647dc979.mockapi.io/users',
});

// export const getCards = () => {
//   return cardsInstance.get('/');
// };

export const getCards = (page = 1) => {
  return cardsInstance.get('/', {
    params: {
      page,
      limit: 3,
    },
  });
};
