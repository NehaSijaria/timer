let numbers = process.argv.slice(2);
for (const number of numbers) {
  // let numberAsInt = Number(number);
  if (!isNaN(number) && number >= 0) {
    setTimeout(() => {
      beep();
    }, number * 1000);
  }
}
const beep = function () {
  process.stdout.write('.');
}