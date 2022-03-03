import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from './config';

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default () => {
  const strategy = new Strategy(params, (payload, done) => {});
};
