let options = {
    acceptAllDevices: true,
};


document.getElementById("connect").addEventListener('click', function () {
    // document.getElementById('status').textContent = 'Attempting to Connect...';
    navigator.bluetooth.requestDevice(options).then((device) => {
        console.log('Connect to', device.name);
        document.getElementById('status').textContent = `Connected to ${device.name}`;

        device.gatt.connect();
    }).catch(error => {
        console.log('Connection Failed', error);
        document.getElementById('status').textContent = `Connection ${error}`;
    })
});