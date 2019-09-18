import React from "react";
import RNTesseractOcr from "react-native-tesseract-ocr";
import RNTextDetector from "react-native-text-detector";

// const config = {
//   lang: "eng",
//   oem: 1,
//   psm: 3
// };

// const tessOptions = {
//   whitelist: null,
//   blacklist: "1234567890'!\"#$%&/()={}[]+*-_:;<>"
// };

export const Tesseract = photo => {
  console.log(photo, "<-- in model");
  return RNTextDetector.detectFromUri(photo.uri)
    .then(text => {
      console.log(text, "<-- text in tesseract");
    })
    .catch(err => {
      console.log("error:", err);
    });
};
