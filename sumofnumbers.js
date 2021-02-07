const testNumbers = [1, 2, 3, 4];
function sumFor(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumFor(testNumbers));
function sumWhile(numbers) {
  let total = 0;
  let i = 0;
  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testNumbers));
function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}
console.log(sumRecursion(testNumbers));

function sumTheSimpleWay(numbers) {

  return _.reduce(numbers, function(memo, num){return memo + num;}, 0);
}
console.log(sumTheSimpleWay(testNumbers));
