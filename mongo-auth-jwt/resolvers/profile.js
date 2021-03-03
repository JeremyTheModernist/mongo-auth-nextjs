import User from '../models/User.js';

// this is a protected route that requires the user to be logged in
// this will ultimately use the auth.js middleware to verify the user
const Profile = async (req, res, next) => {
  try {
    // when the user logs in they will recieve a JWT
    // the Auth.js middleware will parse that JWT when it is sent from the client
    // once it is parsed, the payload of the JWT, the user id, will be stored
    // in req.user and passed along to the Profile resolver

    const user = await User.findById(req.user.id);
    console.log('-----profile.js------YOUR USER!', user);
    res.json(user);
  } catch (e) {
    res.send({
      message: 'Error in fetching the user!',
    });
  }
};

export default Profile;
