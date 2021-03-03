import jwt from 'jsonwebtoken';

// this function is used in any route that needs to send a JWT back to the client
// usually this is a signup and login page
// recieves express response and a user object payload
const generateToken = (res, {user}) => {
  const {id} = user; // the id is needed so correct user data can be accessed on server;
  // cookie expiration in milliseconds;
  // 1hr or 24 hrs;
  const expiration = process.env.DB_ENV === 'testing' ? 60 * 60 * 1000 : 60 * 60 * 1000 * 24; // where each number is in seconds
  // JWT expiration set in seconds or string expressing the duration
  const token = jwt.sign({ id }, process.env.SECRET_JWT_KEY, {
    expiresIn: process.env.DB_ENV === 'testing' ? '1d' : '7d',
  });
  console.log("YOUR JWT COOKIE!", token)
  console.log("YOUR RESPONSE OBJECT",res.cookie)
  return res.cookie('token', token, {
    expires: new Date(Date.now() + expiration), // takes a date type
    secure: false, // set to true only if using https
    httpOnly: true, // only make cookie accessible within server
  }).send({message: 'cookie token set'})
};

export default generateToken;