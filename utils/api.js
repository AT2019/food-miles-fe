const Frisbee = require("frisbee");

// create a new instance of Frisbee
const api = new Frisbee({
  //baseURI: "http://ec2-3-15-224-160.us-east-2.compute.amazonaws.com:3003/api",
  headers: {
    Accept: "application/json",
    // Accept: "application/x-www-form-urlencoded",
    "Content-Type": "application/json"
    // "Content-Type": "application/x-www-form-urlencoded"
  }
});

export const loginUser = (email, password) => {
  return api
    .post("/user/login", {
      body: { email, password }
    })
    .then(({ body }) => body)
    .catch(err => err);
};

export const createUser = (name, email, password) => {
  return api
    .post("/user/register", {
      body: { name, email, password }
    })
    .then(({ body }) => body.savedUser)
    .catch(err => err);
};


export const getPrevShoppingLists = email => {
  return api
    .get('/prevShopping', { params: { email } })
    .then(({ body }) => body.shoppings);
};

export const getUsers = () => {
  return api
    //if you want to use it locally get the ip address from expo client - should something like 192.168.0.0 or 10.0.0.0 replace 0's as appropriate
    .get("https://ec2-3-15-224-160.us-east-2.compute.amazonaws.com:3003/api/user")
    .then(data => console.warn(data));
};


export const getCountryFromPhoto = photo => {

  let data = {
    upload_preset: "u7ulrhus",
    photo: photo
  };

  return fetch("http://ec2-3-15-224-160.us-east-2.compute.amazonaws.com:3003/api/photo", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .then(data => {
      console.log(data, "<-- api data");
      return data;
    })
    .catch(err => console.log("============", err));
};

// IP address 192.168.230.200

