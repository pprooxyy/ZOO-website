const renderComponent = require('../lib/renderComponent');

function ssr(req, res, next) {
  res.render = (reactComponent, props) => {
    // renderComponent(reactComponent, { ...props }, res); // * без COOKIE и SESSION
    renderComponent(reactComponent, { ...props, user: req.session?.user }, res); // * когда созданы COOKIE и SESSION
  };
  next();
}

module.exports = ssr;

