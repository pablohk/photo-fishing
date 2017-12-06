const authRoutes = require('../routes/api/authentication.controller');
const remarkRoutes = require('../routes/api/remark.controller');
const locationRoutes = require('../routes/api/location.controller');
const knotRoutes = require('../routes/api/knot.controller');

module.exports =(app)=>{
  app.use('/api', authRoutes);
  app.use('/api/remark', remarkRoutes);
  app.use('/api/location', locationRoutes);
  app.use('/api/knot', knotRoutes);

};
