const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  justification: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  checkedNames: {
    type: [String],
    default: [],
  },
  checkedRole: {
    type: String,
    required: true,
  },
  unitHead: {
    type: String,
    required: true,
  },
  headInternal: {
    type: String,
    required: true,
  },
  HeadIt: {
    type: String,
    required: true,
  },
  ED: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  dateLast: {
    type: String,
    required: true,
  },
  signature2: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;