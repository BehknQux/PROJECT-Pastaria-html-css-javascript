const menu = [{
        name: 'Chicken Mushroom Cream Fettucine',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'Chicken Mushroom Cream Fettucine'
    },
    {
        name: 'fettucini with bolognese sauce',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'fettucini with bolognese sauce'
    },
    {
        name: 'spaghetti with bolognese sauce',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'spaghetti with bolognese sauce'
    },
    {
        name: 'Chicken mushroom cream penne',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'Chicken mushroom cream penne'
    },
    {
        name: 'fusulli with bolognese sauce',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'fusulli with bolognese sauce'
    },
    {
        name: 'spaghetti with tomato sauce',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'spaghetti with tomato sauce'
    },
    {
        name: 'fettucini with tomato sauce',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'fettucini with tomato sauce'
    },
    {
        name: 'Penne with bolognese sauce',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'Penne with bolognese sauce'
    },
    {
        name: 'Penne with tomato sauce',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'Penne with tomato sauce'
    },
    {
        name: 'fettuccine with pesto',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'fettuccine with pesto 2'
    },
    {
        name: 'spaghetti with pesto',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'spaghetti with pesto'
    },
    {
        name: 'fusulli with pesto',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'fusulli with pesto'
    },
    {
        name: 'penne with pesto',
        price: getRandomPrice(),
        rating: getRandomRating(),
        image: 'penne with pesto'
    },
]

const menuContainer = document.getElementById('menuContainer');
const element = document.querySelector(".icon-container");


function renderMenuItems() {
    menu.forEach((item, index) => {
        const menuItemHTML = `
        <div class="menu-item-container" id="menuItem-${index}">
                <img class="pasta-image" src="menu/${item.image}.png" alt="${item.name}">
                <div class='main-icon-container' id="menuItemIconContainer-${index}">
                <div class="icon-container favourite"><i class="fa-regular fa-heart"></i></div>
                <div class="icon-container cart-icon"><i class="fa-solid fa-cart-plus"></i></div>
                </div>
                <div class="d-flex justify-content-center"><span class="food-name">${item.name}</span></div>
                <div class="menu-item-bottom-container d-flex justify-content-evenly" id="menuItemBottom-${index}">
                    <div class="food-price">${item.price.toFixed(2)}$</div>
                    <div class="rating text-warning"><i class="fa-solid fa-star"></i>${item.rating}</div>
                </div>
            </div>`;

            menuContainer.insertAdjacentHTML('beforeend', menuItemHTML);
            
            const menuItem = document.getElementById(`menuItem-${index}`);
            const menuItemBottom = document.getElementById(`menuItemBottom-${index}`);
            const menuItemIconContainer = document.getElementById(`menuItemIconContainer-${index}`);
            menuItem.addEventListener("mouseover", function() {
                menuItemBottom.classList.add("move-up");
            });
            menuItem.addEventListener("mouseover", function() {
                menuItemIconContainer.classList.add("move-right");
            });
            menuItem.addEventListener("mouseleave", function() {
                menuItemIconContainer.classList.replace("move-right","move-left");
                menuItemBottom.classList.replace("move-up","move-down");
            });
    });
}

document.addEventListener('DOMContentLoaded', renderMenuItems)

function getRandomRating() {
    let rating;
    do {
        rating = Math.random() * 5;
    } while (rating.toFixed(1) < 3)

    return rating.toFixed(1);
}

function getRandomPrice() {
    let price;
    do {
        price = Math.floor(Math.random() * 50);
    } while (price < 15)

    return price - 0.01;
}