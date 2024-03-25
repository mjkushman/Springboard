describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
 
  it('table body should have a row appended with id of key', function () {
    // Prep
    let serverName = serverNameInput.value;
    allServers = { //set up for this specific test
      server1:serverNameInput.value,
      server2:"Charlie",
      server3:"Sarah"
    }
    updateServerTable();   //run the function
  
    expect(document.getElementById('server' + serverId).tagName).toBe('TR'); //TR should exist with proper id
    // console.log(serverTbody)

  });

  afterEach(function() {
    serverNameInput.value ='';
    allServers = {};
    serverTbody.innerHTML = ''
  });
});
