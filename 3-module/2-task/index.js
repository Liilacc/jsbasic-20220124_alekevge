function filterRange(arr, a, b) {
  // ваш код...
  let filtered = [];
  for (let elem of arr){
    if (elem >= a && elem <= b){
      filtered.push(elem);
    }
  }
  return filtered;
}
