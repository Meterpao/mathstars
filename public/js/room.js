const MESSAGE_REFERSH_RATE = 3000;
let nickName = window.prompt('Please enter a nickname', 'Guest');    
document.getElementById('nicknameField').value = nickName;
let roomName = document.getElementById('roomName').value;
let messages = document.getElementById('messages');
let messageSet = new Set();


async function fetchMessages() {
    let res = await fetch('/' + roomName + '/messages');
    return res.json();    
}

function unpackMessages(data) {
    let fixedMessages = [];
    for (let index in data) {
        let message = data[index];
        let msgDict = new Map();
        msgDict.set('nickname', message['nickname']);
        msgDict.set('body', message['body']);
        msgDict.set('time', message['time']);
        fixedMessages.push(msgDict);
    }
    return fixedMessages;
}

async function refreshMessages() {
    // get new messages
    let data = await fetchMessages();
    let fixedData = unpackMessages(data);
    let sortedData = fixedData.sort((a, b) => b.get('date') - a.get('date'));
    
    // remove old messages
    while (messages.firstChild) {
        messages.removeChild(messages.firstChild);
    }
    sortedData.forEach(msgObject => {
        // create a container for individual message
        const message = document.createElement("li");
        message.setAttribute('class', 'list-group-flush no-bulletsg');

        // {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode}
        const tweetPara = document.createElement("p");
        const userName = document.createElement('span');
        userName.style.fontWeight = 'bold';
        userName.innerHTML = msgObject.get('nickname');
        tweetPara.appendChild(userName);
        let dateSpan = document.createElement('span');
        dateSpan.style.color = 'gray';
        dateSpan.innerHTML = " " + msgObject.get('time');
        tweetPara.appendChild(dateSpan);

        const tweetTextSpan = document.createElement('span');
        tweetTextSpan.innerHTML = "<br>" + msgObject.get('body');
        tweetPara.append(tweetTextSpan);
        
        // append the text node to the div
        // e.g. create a div holding tweet content
        const tweetContent = document.createElement("div");
        tweetContent.setAttribute('class', 'tweet-content');
        tweetContent.appendChild(tweetPara);
        message.appendChild(tweetContent);

        // finally append your tweet into the tweet list
        messages.appendChild(message);
    });
}

refreshMessages();
let intervalID = window.setInterval(refreshMessages, MESSAGE_REFERSH_RATE);