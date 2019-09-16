const Frisbee = require('frisbee');

// create a new instance of Frisbee
const api = new Frisbee({
  //   baseURI: 'ec2-3-15-224-160.us-east-2.compute.amazonaws.com:3003/api/', // optional
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const getUsers = () => {
  return api
    .get('http://localhost:3003/api/user')
    .then(data => console.warn(data));
};