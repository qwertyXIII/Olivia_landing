import { key } from "../utils/constants.js";
export async function serverDataLoader(data) {
  let options = {
    mode: "cors",
    method: "GET"
  };
  return new Promise((resolve, reject) => {
    fetch(`https://script.google.com/macros/s/${key}/exec?type=${data}`, options)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}  