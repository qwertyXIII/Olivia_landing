export function serverDataSender(data) {
  let options = {
    mode: "no-cors",
    method: "POST",
    headers: {"content-type" : "application/json"},
    body: data
  };
  fetch(`https://script.google.com/macros/s/${key}/exec`, options)
    .then(response => {response.text(); console.log(response.text());})
    .then(result => {console.log(result);})
    .catch(error => {console.log(error);});
  }  