import axios from 'axios';

export const instance = axios.create({
  // baseURL: 'http://127.0.0.1:8000/acompanhantes',
  // baseURL: 'http://3.12.109.197:8000/',
  baseURL: 'http://3.13.55.240:8000/v1/acompanhantes',
  headers: { 'Content-Type': 'application/json' }
});

export default V => {
  Object.defineProperties(V.prototype, {
    $http: {
      get () {
        return instance;
      },
      post () {
        return instance;
      },
      put () {
        return instance;
      },
      delete () {
        return instance;
      }
    },
  });
};
