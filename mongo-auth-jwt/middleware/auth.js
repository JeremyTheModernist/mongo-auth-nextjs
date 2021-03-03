import jwt from 'jsonwebtoken';

// need to pass the results on to the the route this middleware is used in:
const isAuthorized = (req, res, next) => {
  // check to see if a JWT token was sent along with the client request.
  // here, we are checking req.cookies.token (which is what was set when the JWT, was signed)
  // to see if a token cookie exist
  console.log("INCOMING COOKIES ON SERVER",req.cookies)
  const token = req.cookies.token || '';
  if (!token) return res.status(401).json({ message: 'You need to login' });
  try {
    // decode the token and retrieve the value
    // this value will be what you stored in the JWT payload when it was signed
    // which is the User ID
    const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
    console.log("---auth.js----DECODED USER!",decoded)
    // set the request user = to the decoded user id;
    req.user = {
      id: decoded.id
    }
    // pass this along to the next route
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: 'Invalid token' });
  }
};

export default isAuthorized;
