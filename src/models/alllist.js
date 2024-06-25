const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: {
            type:String
        },

  description: 
  {
            type: String
  },
  image: 
  {
            type: String
  },
  price:
  {
            type: Number
  } ,
  location: 
  {
            type:String
  },
  country: 
  {
            type:String
  }
});


const User = mongoose.model('User', userSchema);