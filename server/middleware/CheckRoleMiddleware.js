const jwt = require('jsonwebtoken');

module.exports = (role) => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const [, token] = req.headers.authorization.split(' ');

      if (!token) {
        throw new Error();
      }
      const decodedJWT = jwt.verify(token, process.env.SECRET_KEY);
      if (decodedJWT.role !== role) {
        res.status(403).json({ message: 'Нет доступа' });
      }
      req.user = decodedJWT;
      next();
    } catch (e) {
      res.status(401).json({ message: 'Не авторизован' });
    }
  };
};
