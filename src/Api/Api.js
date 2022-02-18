const url = "http://localhost:8081/api";

export function getContent(currentTable, setData, token) {
  var requestOptions = {
    method: "GET",
  };
  fetch(`${url}?${currentTable}&token=${token}`, requestOptions)
    .then((response) => response.json())
    .then((res) => setData({ isLoaded: true, response: res }))
    .catch((error) => console.log("error", error));
}

export async function postContent(obj) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(obj);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var response = await fetch(url, requestOptions);
  var commits = await response.json();
  return commits;
}
