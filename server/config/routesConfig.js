const authRoutes = require('../routes/api/authentication.controller');
const remarkRoutes = require('../routes/api/remark.controller');
const locationRoutes = require('../routes/api/location.controller');
module.exports =(app)=>{
  app.use('/api', authRoutes);
  app.use('/api/remark', remarkRoutes);
  app.use('/api/location', locationRoutes);

};
