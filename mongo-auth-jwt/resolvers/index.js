import Signup from './signup.js';
import Login from './login.js';
import Profile from './profile.js';
import Logout from './logout.js';

export const resolvers = {
  getUser: (req, res, next) => {
    res.send({
      user: 'Johnny B. Goode',
    });
  },
  Signup,
  Login,
  Profile,
  Logout,
};
