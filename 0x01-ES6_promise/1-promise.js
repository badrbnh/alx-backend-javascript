export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolved, rejected) => {
    if (success === true) {
      resolved({
        status: 200,
        body: 'Success',
      });
    } else {
      rejected(new Error('The fake API is not working currently'));
    }
  });
  return promise;
}
