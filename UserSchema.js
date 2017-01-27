/* jshint esversion: 6 */

module.exports = (mongoose) => {
   var UserSchema = new mongoose.Schema({ // creates a new mongoose schema called UserSchema
      first: String,
      last: String,
      email: String,
      zip: Number,
      interests: Object
   });

   var User = mongoose.model('User', UserSchema); // create a new model called 'User' based on 'UserSchema'

   return User;
};
