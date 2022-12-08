const mockAPI = "https://62904135665ea71fe12f6eef.mockapi.io/products";

fetch(mockAPI)
  .then((res) => res.json())
  .then((data) => console.log(data));
