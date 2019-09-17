const Frisbee = require("frisbee");
const ImageResizer = require("react-native-image-resizer");
const firebase = require("firebase/app");
const firestore = require("firebase/firestore");
const firebaseConfig = require("../firebase.config.js");
const admin = require("firebase-admin");
// const functions = require("firebase-functions")
// const ImagePicker = require("react-native-image-picker");
// const RNFetchBlob = require("react-native-fetch-blob");

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
    .get("http://localhost:3003/api/user")
    .then(data => console.warn(data));
};

admin.initializeApp({ credential: admin.credential.applicationDefault() });

const db = admin.firestore();

export const getCountryFromPhoto = photo => {
  // let data = new FormData();
  // data.append("my_photo", photo);
  // ImageResizer.createResizedImage(photo, 400, 400);
  console.log(photo, "<-- in api");
  // return (
  //   api
  //     .post(
  //       "https://api.cloudinary.com/v1_1/dw8quf2bw/image/upload/?upload_preset=gzq8qg1s",
  //       { "Content-Type": "multipart/form-data" },
  //       [{ name: "file", filename: photo.uri }]
  //     )
  //     // data: RNFetchBlob.wrap(photo) }]
  //     .then(result => console.log(result, "<-- result in api"))
  //     .catch(err => console.log(err, "<-- error in api"))
  // );

  let data = {
    upload_preset: "u7ulrhus",
    file: photo
  };

  return fetch("https://api.cloudinary.com/v1_1/dw8quf2bw/image/upload", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(r => {
      let data = r.json();
      console.log(r);
      console.log(data.secure_url, "<-- api data");
      return data.secure_url;
    })
    .catch(err => console.log(err));
};

// IP address 192.168.230.200
