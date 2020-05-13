// Controller handler to handle functionality in room page

const roomGenerator = require('../util/roomIdGenerator.js');
const server = require('./../server.js');

// Example for handle a get request at '/:roomName' endpoint.
async function getRoom(request, response){
  let roomExists = await server.roomExists(request.params.roomName);
  if (roomExists) {
    response.render('room', {title: 'chatroom', roomName: request.params.roomName});
  } else {
    response.status(404).send('room does not exist');
  }
}

async function createRoom(request, response){
  let roomName = await server.createRoom();
  response.redirect('/' + roomName);
}

module.exports = {
    getRoom,
    createRoom
};

