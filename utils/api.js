const Frisbee = require('frisbee');

// create a new instance of Frisbee
const api = new Frisbee({
  baseURI: 'http://ec2-3-15-224-160.us-east-2.compute.amazonaws.com:3003/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const loginUser = (email, password) => {
  return api
    .post('/user/login', {
      body: { email, password }
    })
    .then(({ body }) => body)
    .catch(err => err);
};

export const createUser = (name, email, password) => {
  return api
    .post('/user/register', {
      body: { name, email, password }
    })
    .then(({ body }) => body.savedUser)
    .catch(err => err);
};
