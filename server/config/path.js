const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const expressLayouts = require('express-ejs-layouts');

module.exports= (app)=>{
  // uncomment after placing your favicon in /public
  app.use(favicon(path.join(__dirname, '../uploads/img/', 'favicon.ico')));
  app.use('/dist/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
  app.use('/dist/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
  app.use(express.static(path.join(__dirname, '/../public')));
  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
  // view engine setup
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  app.use(expressLayouts);
  app.set('layout','layout/main-layout');
};
