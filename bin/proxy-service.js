var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'InternetProxy',
  description: 'INPROC Internet Proxy server',
  script: 'F:\\Projects\\Proxy\\bin\\proxy.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// svc.uninstall();
svc.install();