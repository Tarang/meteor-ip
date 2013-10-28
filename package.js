Package.describe({
  summary: "Access browser data such as headers, ip address"
});

Package.on_use(function (api) {
  api.export('GetClient', ['server']);
  api.add_files(
    [
      'lib.js'
    ],
    ['server']
  );
});