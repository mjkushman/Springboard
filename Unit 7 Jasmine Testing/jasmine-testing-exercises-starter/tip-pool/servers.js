let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {}; //naming convention: server#: "server name" --> {server1:"Alice", server2:"Bill"}
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++; //increment server ID
    allServers['server' + serverId] = { serverName }; // adds server name and id to allServer{}

    updateServerTable(); //call updateServerTable

    serverNameInput.value = ''; //clears the field in DOM
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key); //sets id attribute 

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName); //appendTd is in helpers.js
    appendTd(newTr, '$' + tipAverage.toFixed(2));

    serverTbody.append(newTr);
  }
}
