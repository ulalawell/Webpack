const elem = document.getElementById('rainbow');
const colors = ['#524650', '#918384', '#af8b40', '#ad6453', '#605544', '#d8c18f'];
let counter = 0;

if (elem) {
  setInterval(() => {
    const color = counter % colors.length;
    counter += 1;
    elem.bgColor = colors[color];
  }, 1000);
}
