function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let minn = Infinity;
  let maxx = -Infinity;
  for (let elem of arr){
    if (Number.isFinite(Number(elem))){
      if (Number(elem) < minn){
        minn = Number(elem);
      }
      if (Number(elem) > maxx){
        maxx = Number(elem);
      }
    }
  }
  let result = {};
  result.min = minn;
  result.max = maxx;
  return result;
}