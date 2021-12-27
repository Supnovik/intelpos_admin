const url = "http://localhost:8081/api";

export function getContent(currentTable, setData) {
  var requestOptions = {
    method: "GET",
  };

  fetch(`${url}?${currentTable}`, requestOptions)
    .then((response) => response.json())
    .then((res) => setData({ isLoaded: true, response: res }))
    .catch((error) => console.log("error", error));
}

export function deleteContent(currentTable, element) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    type: "delete",
    content: {
      table: currentTable,
      obj: {
        id: element.id,
      },
    },
  });
  console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  return true;
}

export function changeContent(currentTable, element) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    type: "edit",
    content: {
      table: currentTable,
      obj: element,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((response) => response.json())
    .catch((res) => console.log(res))
    .catch((error) => console.log("error", error));
  return true;
}
