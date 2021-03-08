const unit = 3;

const data = [1, 2, 3, 4, 5, 6, 7, 8];
const slices: number[][] = [];
for (let i = 0; i < data.length; i += unit) {
  slices.push(data.slice(i, i + unit));
}

console.log(slices);

slices.forEach((sliced, index) => {
  console.log(sliced);
  console.log(data.slice(index * unit, (index + 1) * unit));
});

export { };