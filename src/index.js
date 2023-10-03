import './styles.css';
import Icon from './img/icon.jpeg';
import chibi from './img/chibi.png';

// alert("Index card activated!")

const container = document.querySelector("#content");

// const icon = new Image();
// icon.src = Icon;
// container.appendChild(icon);

// const description = document.createElement('p');
// description.textContent = 'The best restaurant in town! Eat all you can!';
// description.classList.add('information')
// container.appendChild(description);

function pageLoad(){

    const banner = document.createElement('div');
    banner.textContent ='Sakura';
    banner.classList.add('banner');
    container.appendChild(banner);
    
    const navBar = document.createElement('nav');
    const content = document.createElement('div');

    const homeButton = document.createElement('div');
    homeButton.textContent = 'Home';
    homeButton.classList.add('navItem');
    homeButton.addEventListener('click', function() {
        home(content);
    } );

    const menuButton = document.createElement('div');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('navItem');
    menuButton.addEventListener('click', function(){
        menu(content);
    });

    const contactButton = document.createElement('div');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('navItem');
    contactButton.addEventListener('click', function(){
        contact(content);
    });

    

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    container.appendChild(navBar);
    container.appendChild(content);

    home(content);
}

function home(content) {
    content.innerHTML = '';
    const photo = new Image();
    photo.src = chibi;
    

    const description = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum, ex vitae auctor convallis, lorem tortor maximus massa, eu egestas nisl tellus non lorem. Etiam mollis, nulla sit amet condimentum volutpat, sapien risus aliquet enim, at pretium ex mi vel urna. Vivamus pretium interdum enim, et elementum lacus. Ut semper mi vel commodo mattis. Vestibulum vel purus vehicula, posuere dolor nec, luctus tortor. Donec a iaculis neque. Nunc egestas efficitur nibh, et tincidunt felis. Praesent nulla justo, bibendum non quam vel, malesuada varius est.';

    content.appendChild(photo);
    content.appendChild(description);
}


function menu(content) {
    content.innerHTML = '';
    
    const foodFactory = (food, description, price) => {
        const div = document.createElement('div');
        const title = document.createElement('div');
        title.textContent = food;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = description;

        const priceDiv = document.createElement('div');
        priceDiv.textContent = price;

        div.appendChild(title);
        div.appendChild(descriptionDiv);
        div.appendChild(priceDiv);

        content.appendChild(div);

        return {food, description, price};
    }
  
    const onigiri = foodFactory('onigiri', 'A simple riceball, served with a dipping sauce', '$2.00');
    const takoyaki = foodFactory('takoyaki', 'A Japanese pancake with octopus filling', '$3.00');
    const sushi = foodFactory('sushi', 'Sushi made with fresh salmon', '$4.00');
    const sashimi = foodFactory('sashimi', 'Sashimi made with fresh tuna', '$5.00');
    const tempura = foodFactory('tempura', 'Tempura made with fresh prawns', '$6.00');
    const oyakodon = foodFactory('oyakodon', 'Oyakodon made with chicken', '$7.00');
    const tamagoyaki = foodFactory('tamagoyaki', 'Tamagoyaki made with egg', '$8.00');


}

function contact(content) {
    content.innerHTML = '';
    const header = document.createElement('h1');
    header.textContent = 'Contact us!';

    content.appendChild(header);
}

pageLoad();