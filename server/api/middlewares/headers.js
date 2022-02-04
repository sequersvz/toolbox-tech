// main headers middleware

module.exports = (_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET',
    );
  res.setHeader('Content-Type', 'application/json');
  next();
};