import { Profile } from '../models/index.js';
import bcrypt from 'bcrypt';

// export const seedProfiles = async () => {
//   const profiles = [
//     { name: 'Roronoa Zoro', password: 'password', email: 'test@test.com', role: 'admin' },
//     { name: 'Urameshi Yusuke', password: 'password', email: 'test2@test.com', role: 'user' },
//     { name: 'Killua Zoldyck', password: 'password', email: 'test3@test.com', role: 'employee' },
//   ];

  const hashedProfiles = await profiles.map((profile) => {
    return {
      ...profile,
      password: bcrypt.hashSync(profile.password, 10),
    };
  });

  console.log('hashedUsers', hashedProfiles);

  await Profile.bulkCreate(hashedProfiles);
};
