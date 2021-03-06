const { model } = require('mongoose');

const UserModel = require('./models/User');
const ServiceModel = require('./models/Service');
const ReviewModel = require('./models/Review');
const BookModel = require('./models/Booked');

const User = model('users', UserModel);
const Service = model('services', ServiceModel);
const Review = model('reviews', ReviewModel);
const Book = model('book', BookModel);

module.exports = { User, Service, Review, Book };
