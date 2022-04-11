// How to work on tech tasks. Step by step guide

// algo
// 1 не массив, вернуть null +
// 2 проверить boolean +
// 2.1 если true - sort по возростания +
// 2.2 если false - sort по убыванию +
// 3 вернуть массив +

// input: array, boolean
// return: массив по убиванию или возростанию

const sortContacts = (arrContacts, boolean) => {
  if (!Array.isArray(arrContacts)) {
    return null;
  }

  if (boolean === false) {
    return arrContacts.sort((a, b) => b.name.localeCompare(a.name));
  }
  return arrContacts.sort((a, b) => a.name.localeCompare(b.name));
};

// DATA TEST
// console.log(sortContacts);
