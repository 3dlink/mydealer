/**
 * AuthController
 * @description :: Server-side logic for manage usuarios's authorization
 */
var passport = require('passport');
/**
 * Triggers when usuarios authenticates via passport
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Object} error Error object
 * @param {Object} usuarios usuarios profile
 * @param {Object} info Info if some error occurs
 * @private
 */
function _onPassportAuth(req, res, error, usuarios, info) {
  if (error) return res.serverError(error);
  if (!usuarios) return res.unauthorized(null, info && info.code, info && info.message);
 
  return res.ok({
    // TODO: replace with new type of cipher service
    token: CipherService.createToken(usuarios),
    usuarios: usuarios
  });
}
 
module.exports = {
  /**
   * Sign up in system
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  signup: function (req, res) {
    Usuarios
      .create(_.omit(req.allParams(), 'id'))
      .then(function (usuarios) {
        var options={
          //to:req.param('email'),
          to:req.param('Correo'),
          subject:'registro exitoso',
          html: "<h1>registro exitoso</h1>"
        }
        EmailServices.sendMail(options,'local');
        return {
          // TODO: replace with new type of cipher service
          token: CipherService.createToken(usuarios),
          usuarios: usuarios
        };
      })
      .then(res.created)
      .catch(res.serverError);
  },
 
  /**
   * Sign in by local strategy in passport
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  signin: function (req, res) {
    passport.authenticate('local', 
      _onPassportAuth.bind(this, req, res))(req, res);
  },
};