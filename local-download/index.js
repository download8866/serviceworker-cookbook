// Register the ServiceWorker
navigator.serviceWorker.register('service-worker.js', {
  scope: '.'
}).then(function(registration) {
  console.log('The service worker has been registered ', registration);
  var content = document.getElementById("text");
  var button = document.getElementById("download");

});

