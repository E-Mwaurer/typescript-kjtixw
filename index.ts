// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Algorithm Challenge 3</h1>`;

function addBorder(picture: string[]): string[] {
  const items = "*".repeat(picture[0].length + 2);
  picture.unshift(items);
  picture.push(items);

  for (let j = 1; j < picture.length - 1; j++) {
    picture[j] = "*".concat(picture[j],"*");
  }
  return picture;
}

// console.log(addBorder(["abc", "ded",]));