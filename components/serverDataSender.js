import { key } from "../utils/constants.js";

export async function serverDataSender(type, data) {
  let options = {
    mode: "no-cors",
    method: "POST",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify({
      type: type,
      data: data
    })
  };
  return fetch(`https://script.google.com/macros/s/${key}/exec`, options)
    .then(response => {response.text(); console.log(response.text());})
    .then(result => {return result})
    .catch(error => {return error});
  }  