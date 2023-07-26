function showSalary(users, age) {
  // ваш код...
  selected = [];
  for (let user in users){
    if (users[user]['age'] <= age){
      selected.push(users[user]['name'] + ", " + users[user]['balance'] + "\n");
    }
  }
  str = selected.join('');
  str = str.slice(0, -1);
  return str;
}
