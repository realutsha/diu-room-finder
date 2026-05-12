function findRoom() {

  const roomNumber =
    document.getElementById("roomInput").value;

  const result =
    document.getElementById("result");

  if (rooms[roomNumber]) {

    result.innerHTML = `
      <h2>Room ${roomNumber}</h2>
      <p>Building: ${rooms[roomNumber].building}</p>
      <p>Floor: ${rooms[roomNumber].floor}</p>
      <p>${rooms[roomNumber].text}</p>
    `;

  } else {

    result.innerHTML =
      "<p>Room not found</p>";

  }

}
