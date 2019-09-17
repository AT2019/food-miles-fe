const Frisbee = require("frisbee");
// create a new instance of Frisbee
const api = new Frisbee({
  //   baseURI: 'ec2-3-15-224-160.us-east-2.compute.amazonaws.com:3003/api/', // optional
  headers: {
    Accept: "application/json",
    // Accept: "application/x-www-form-urlencoded",
    "Content-Type": "application/json"
    // "Content-Type": "application/x-www-form-urlencoded"
  }
});

export const getUsers = () => {
  return api
    .get("https://ec2-3-15-224-160.us-east-2.compute.amazonaws.com:3003/api/user")
    .then(data => console.warn(data));
};


export const getCountryFromPhoto = photo => {
  console.log(photo, "<-- in api");

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
