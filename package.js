Package.describe({
  summary: "Exposes BrainTree's Payment Gateway Interface"
});

Package.on_use(function (api) {
  api.add_files('braintree.js', ['client','server']);
  api.export('BrainTree', ['client','server']);
});