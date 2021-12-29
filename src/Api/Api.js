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

export async function postContent(obj) {
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
    .then((res) => setReturn(res))
    .catch((error) => console.log("error", error));

  function setReturn(res) {
    console.log(res);
    if (res.status === "200") return true;
    else return false;
  }
}
