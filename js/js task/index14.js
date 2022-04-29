// algo
// 1 создать обьект user with firstName and lastName +
// 2 создать метод getFullName, который возвращает firstName and lastName +
// 3 создать метод setFullName который будет сохранять данные нового имени
// 4 export obj

const user = {
  firstName: 'John',
  lastName: 'Doe',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const name = fullName.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  },
};

// DATA TEST
user.setFullName('An Sh');
console.log(user);
