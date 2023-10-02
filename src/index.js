import './styles.css';
import Icon from './img/icon.jpeg';

alert("Index card activated!")

const container = document.querySelector("#content");
const headline = document.createElement('div');
headline.innerHTML = 'THE BEST RESTAURANT';
container.appendChild(headline);

const icon = new Image();
icon.src = Icon;
container.appendChild(icon);

const description = document.createElement('p');
description.textContent = 'The best restaurant in town! Eat all you can!';
description.classList.add('information')
container.appendChild(description);