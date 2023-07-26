function namify(users) {
  // ваш код...
  let names = [];
  for (let key in users){
      names.push(users[key]['name']);
    }
  return names;
}
