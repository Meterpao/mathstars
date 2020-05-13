// import dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const path = require('path');
const utils = require('./util/roomIdGenerator.js');

// import handlers
const homeHandler = require('./controllers/home.js');
const game1Handler = require('./controllers/game1.js');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// If you choose not to use handlebars as template engine, you can safely delete the following part and use your own way to render content
// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Create controller handlers to handle requests at each endpoint
app.get('/', homeHandler.getPage);
app.get('/game1', game1Handler.getPage);

// NOTE: This is the sample server.js code we provided, feel free to change the structures

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));

// const mysql = require('mysql2/promise');
// const moment = require('moment');
// const user = 'peter_mao@brown.edu';
// const password = 'zzzqqq';
// const db = 'peter_mao_chatroom';

// const pool = mysql.createPool({
//     host: 'bdognom-v2.cs.brown.edu',
//     user: user,
//     password : password,
//     database: db
// });

// async function postMessage(request, response){
//     let message = request.body.message;
//     let nickname = request.body.nickname;
//     let roomName = request.params.roomName;
//     let time = moment().format("YYYY-MM-DD HH:mm:ss");
//     let success = await dbPostMessage(roomName, message, nickname, time);
//     response.status(204).send()
// }

// async function getMessages(request, response){
//     let roomName = request.params.roomName;
//     let messages = await dbGetMessages(roomName);
//     response.json(messages);
// }

// async function getRooms(request, response) {
//     let rooms = await dbGetRooms();
//     response.json(rooms);
// }

// async function dbGetRooms() {
//     try {
//         response = await pool.query('SELECT name FROM chatroom;');
//         return response[0];
//     } catch (err) {
//         console.log(err);
//         return [];
//     }
// }

// module.exports.createRoom = async function createRoom() {
//     console.log("starting create room!");
//     let exists = true;
//     let roomName = utils.roomIdGenerator();
//     let response = null;
//     // check if it exists ...
//     while (exists) {
//         try {
//             response =  await pool.query("SELECT * FROM chatroom WHERE name = ?", [roomName])
//         } catch (err) {
//             console.log(err);
//         }
//         if (response[0].length == 0) {
//             exists = false;
//         } else {
//             roomName = utils.roomIdGenerator();
//         }
//     }

//     pool.query("INSERT INTO chatroom (name) VALUES (?)", [roomName]);
//     return roomName;
// }

// module.exports.roomExists = async function roomExists(roomName) {
//     let roomId = await getRoomID(roomName);
//     return roomId !== '';
// }

// async function getRoomID(roomName) {
//     try {
//         let response = await pool.query("SELECT id FROM chatroom WHERE name = ?", [roomName]);
//         if (response[0].length > 0) {
//             console.log(response[0]);
//             return response[0][0].id;
//         } else {
//             return "";
//         }
//     } catch (err) {
//         return "";
//     }
// }

// async function dbGetMessages(roomName) {
//     try {
//         let roomID = await getRoomID(roomName);
//         response = await pool.query('SELECT id, nickname, body, time FROM message WHERE roomId = ?;', [roomID]);
//         return response[0];
//     } catch (err) {
//         return [];
//     }
// }

// async function dbPostMessage(roomName, message, nickname, time) {
//     try {
//         let roomID = await getRoomID(roomName);
//         let response = await pool.query('INSERT INTO message (roomId, nickname, body, time)' + 
//             ' VALUES (?, ?, ?, ?);', [roomID, nickname, message, time]);
//         return true;
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

// async function create() {
//     console.log("create function starting...")
//     try {
//         await pool.query('CREATE TABLE IF NOT EXISTS chatroom (id INTEGER PRIMARY KEY AUTO_INCREMENT, name TEXT)');
//         await pool.query('CREATE TABLE IF NOT EXISTS message (' +
//             'id INTEGER PRIMARY KEY AUTO_INCREMENT,' +
//             'roomId INTEGER,' +
//             'INDEX rId (roomId),' +
//             'FOREIGN KEY (roomId)' +
//             '    REFERENCES chatroom(id)' +
//             '    ON DELETE CASCADE,' +
//             'nickname TEXT,' +
//             'body TEXT,' +
//             'time TIME);');
//         console.log("yes great success")
//     } catch (err) {
//         console.log("uh oh, error");
//         console.log(err);
//     }
// }

// async function showTables() {
//     try {
//         const chatroomTable = await pool.query('SELECT * FROM chatroom;');
//         console.log(chatroomTable[0]);
//         const messageTable = await pool.query('SELECT * FROM message;');
//         console.log(messageTable[0]);
//         //const x = await pool.query("DESCRIBE message");
//         //console.log(x[0]);
//     } catch (err) {
//         console.log(err);
//     }
// }