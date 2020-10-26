module.exports = (api, options = { jsonp, contentType }, rootOptions = {}) => {
  const dependencies = {
    axios: '^0.21.0',
    qs: '^6.9.4',
  }

  api.extendPackage({
    dependencies,
  })

  api.render('./template', { });
}
