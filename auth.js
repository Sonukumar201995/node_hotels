import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Person from './models/person.js'; // Use capital P

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log('Received credentials:', username, password);

      const user = await Person.findOne({ username }); // Use Person here

      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }

      const isPasswordMatch = user.password === password;

      if (!isPasswordMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// ES module export
export default passport;
