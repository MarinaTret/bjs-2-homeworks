function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
  return false;
  }

  return arr1.every((value, index) => {
  console.log(value, arr2[index]);
  return value === arr2[index];
  });
}

//Задача 2
function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter(user => user.gender === gender);
  if (filteredUsers.length === 0) {
  return 0;
  }

  const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
  //acc - аккумулятор, по умолчанию 0, можно присвоить любое свое значение
  //берет возраст первого, затем прибавляет возраст второго, потом к этой сумме + возраст третьего

  const averageAge = totalAge / filteredUsers.length;
  return averageAge;
}