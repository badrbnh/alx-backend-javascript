import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    uploadPhoto(fileName),
    signUpUser(firstName, lastName),
  ]).then((results) => (
    results.map((result) => ({
      status: result.status,
      value: result.value === 'fulfilled' ? result.value : `${result.reason}`,
    }))
  ));
}
