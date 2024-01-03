export default function signUpUser(firstName, lastName) {
  const promise = new Promise((resolved) => {
    resolved({
      firstName,
      lastName,
    });
  });
  return promise;
}
