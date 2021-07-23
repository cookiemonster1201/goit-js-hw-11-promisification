// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = ({ id }) => {
  const delay = randomIntegerFromInterval(200, 500);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve(`Transaction ${id} processed in ${delay}ms`);
      } else {
        reject(`Error processing transaction ${id}. Please try again later.`);
      }
    }, delay);
  });

  return promise;
};

makeTransaction({ id: 70, amount: 150 })
  .then(result => {
    console.log(`SUCCESS --> ${result}`);
  })
  .catch(error => {
    console.log(`ERROR --> ${error}`);
  });

makeTransaction({ id: 71, amount: 230 })
  .then(result => {
    console.log(`SUCCESS --> ${result}`);
  })
  .catch(error => {
    console.log(`ERROR --> ${error}`);
  });

makeTransaction({ id: 72, amount: 75 })
  .then(result => {
    console.log(`SUCCESS --> ${result}`);
  })
  .catch(error => {
    console.log(`ERROR --> ${error}`);
  });

makeTransaction({ id: 73, amount: 100 })
  .then(result => {
    console.log(`SUCCESS --> ${result}`);
  })
  .catch(error => {
    console.log(`ERROR --> ${error}`);
  });
