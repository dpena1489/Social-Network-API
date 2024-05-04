const { Schema, model } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
    
    },
    email: {
      type: String,
      required: true,
     
    },
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('user', userSchema);

module.exports = user;
