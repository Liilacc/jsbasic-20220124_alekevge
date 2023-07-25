function checkSpam(str) {
  // ваш код...
  str = str.toUpperCase();
  return str.indexOf('1XBET') != -1 || str.indexOf('XXX') != -1;
}
