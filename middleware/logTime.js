const log = (req, res, next) => {
    console.log(`Request at ${new Date()} for ${req.method} ${req.url}`);
    next();
  };
  
  module.exports = log;
  