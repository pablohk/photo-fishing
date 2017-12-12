const authRoutes = require('../routes/api/authentication.controller');
const remarkRoutes = require('../routes/api/remark.controller');
const locationRoutes = require('../routes/api/location.controller');
const knotRoutes = require('../routes/api/knot.controller');
const photoRoutes = require('../routes/api/photo.controller');
const weatherRoutes = require('../routes/api/weather.controller');
const userRoutes = require('../routes/api/user.controller');
module.exports =(app)=>{
  app.use('/api', authRoutes);
  app.use('/api/remark', remarkRoutes);
  app.use('/api/location', locationRoutes);
  app.use('/api/knot', knotRoutes);
  app.use('/api/photo', photoRoutes);
  app.use('/api/weather', weatherRoutes);
    app.use('/api/user', userRoutes);
};
