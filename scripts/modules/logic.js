let variable = "W3Schools";

const arr = [
  ["o", 0],
  ["l", 1],
];

let textArray = [];

for (const x of variable) {
  textArray.push(arr.map((item) => (x === item[0] ? item[1] : "")));
}

// let text = textArray.flat().join("");

console.log(textArray);
