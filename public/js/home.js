let chatroomsList = document.getElementById('chatroomsList');
let chatroomsHidden = document.getElementById('chatroomsHidden');
const REFERSH_RATE = 3000;

async function fetchRooms() {
  let res = await fetch('/getRooms');
  return res.json();
}

async function initializeRoomList() {
  let json = await fetchRooms();
  let rooms = [];

  // clear old rooms
  while (chatroomsList.firstChild) {
    chatroomsList.removeChild(chatroomsList.firstChild);
  }

  // extract roomnames from json object
  for (let i in json) {
    rooms.push(json[i]['name']);
  }

  // create <li> items and append to <ul>
  for (let i in rooms){
    let room = rooms[i];
    let a = document.createElement('a');
    let text = document.createTextNode(room); 
    a.setAttribute("class", "list-group-item list-group-item-action");
    a.appendChild(text);
    a.title = room;
    a.href = '/' + room;
    chatroomsList.append(a);
  }
}

window.onload = initializeRoomList;
let intervalID = window.setInterval(initializeRoomList, REFERSH_RATE);