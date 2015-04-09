Package.describe({
  summary: "Telescope custom theme",
  version: '1.0.0',
  name: "telescope-theme-custom"  
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'templating', 'telescope-base', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/style.css',
    'lib/client/templates/new_posts_list.html',
    'lib/client/custom.js',
    ], ['client']);
});
