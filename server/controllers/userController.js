const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
const { User, Basket } = require('../models');

const generateJWT = (id, email, role) => {
  return jsonWebToken.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};
class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Неправильный пароль или email'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest('Пользователь с таким email уже существует')
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = User.create({
      password: hashPassword,
      email,
      role,
    });

    const basket = Basket.create({ userId: user.id });
    const token = generateJWT(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'));
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const { id, email, role } = req.user;
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
