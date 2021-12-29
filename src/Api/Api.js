const url = "http://159.223.167.52/api";

export function getContent(currentTable, setData) {
  var requestOptions = {
    method: "GET",
  };

  fetch(`${url}?${currentTable}`, requestOptions)
    .then((response) => response.json())
    .then((res) => setData({ isLoaded: true, response: res }))
    .catch((error) => console.log("error", error));
}

export function postContent(obj) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(obj);
  var raw = JSON.stringify(obj);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((respons) => console.log(respons))
    .catch((error) => console.log("error", error));
  return true;
}
