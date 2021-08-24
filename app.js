/////// app.js

const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const host = process.env.host;
mongoose.connect(host, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));
