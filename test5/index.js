export const reverseArray = arr => {
  if(!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}

export const withdraw = (clients, balances, client, amount) => {
  const nameInArray = clients.findIndex(name => name === client);
  const sumOfClient = balances[nameInArray];
  const balance = sumOfClient - amount;
  if (balance >= 0) {
    return balance;
  }
  return -1;
}

export const getAdults = obj => {
  const adultsPeople = Object.entries(obj);
  const arr = adultsPeople.filter(el => el[1] >= 18);
  const result = arr.reduce((acc, el) => {
    const [key, value] = [...el];
    acc[key] = value;
    return acc;
  }, {});

  return result;
};

// examples
const obj = {'John Doe': 19, Tom: 17, Bob: 18}; // ==> { 'John Doe': 19, Bob: 18 }
console.log((obj));