Package.describe({
  summary: "Exposes BrainTree's Payment Gateway Interface"
});

Npm.depends({ braintree: 'v1.13.1' });

Package.on_use(function (api) {
  api.add_files('server.js', ['server']);
  api.add_files('client.js', ['client']);
  api.export('Braintree', ['server']);
});