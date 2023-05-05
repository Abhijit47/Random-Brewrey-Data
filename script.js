console.log("Hello");

// Element refernces
const container = document.querySelector('#container');
const cards = document.querySelector('.cards');

const apiUri = `https://api.openbrewerydb.org/v1/breweries`;

// For creating node
const createNode = (element) => {
  return document.createElement(element);
};

// for appending child with parent
const appendChild = (parent, el) => {
  return parent.appendChild(el);
};

// create a button element
let getBtn = createNode("button");
// Add class to this button
let getBtnClass = ["btn", "btn-outline-dark"];
getBtn.classList.add(...getBtnClass);
getBtn.innerHTML = `Get Data`;

// Append this button to parent element
appendChild(container, getBtn);

// Get Data function to fetch an api and display data
const getData = async () => {

  try {
    const response = await fetch(apiUri);
    const jsonData = await response.json();
    // console.log(jsonData);

    // Using forEach for getting data one-by-one 
    jsonData.forEach((data, i) => {
      // console.log(i + 1, data);

      // Destructuring data
      const { name, brewery_type, address_1, country, phone, state, website_url } = data;

      // create a card, add class and style
      let card = createNode("div");
      card.classList.add('card');
      card.style.width = "20rem";

      // Append cards container with this card 
      appendChild(cards, card);

      // create a card header 
      let card_header = createNode("div");
      let cardHeaderClass = ["card-header", "fw-bold", "text-break"];
      card_header.classList.add(...cardHeaderClass);
      card_header.innerHTML = `Name: ${name}`;

      // Append card with card header
      appendChild(card, card_header);

      // create a ul elemenr and add class
      let list_group = createNode("ul");
      let classList = ["list-group", "list-group-flush"];
      list_group.classList.add(...classList);

      // Append this ul to this card
      appendChild(card, list_group);

      // create one li element 
      let list_item1 = createNode("li");
      list_item1.classList.add("list-group-item");
      list_item1.innerHTML = `Brewery Type: ${brewery_type}`;

      // Append this li with ul
      appendChild(list_group, list_item1);

      // create one li element 
      let list_item2 = createNode("li");
      list_item2.classList.add("list-group-item");
      list_item2.innerHTML = `Address: ${address_1}`;

      // Append this li with ul
      appendChild(list_group, list_item2);

      // create one li element 
      let list_item3 = createNode("li");
      list_item3.classList.add("list-group-item");
      list_item3.innerHTML = `State: ${state}`;

      // Append this li with ul
      appendChild(list_group, list_item3);

      // create one li element 
      let list_item4 = createNode("li");
      list_item4.classList.add("list-group-item");
      list_item4.innerHTML = `Country: ${country}`;

      // Append this li with ul
      appendChild(list_group, list_item4);

      // create one li element 
      let list_item5 = createNode("li");
      list_item5.classList.add("list-group-item");
      list_item5.innerHTML = `Phone: ${phone}`;

      // Append this li with ul
      appendChild(list_group, list_item5);

      // create a card-body and add some class
      let card_body = createNode("div");
      let cardBodyClass = ["card-body", "align-self-center"];
      card_body.classList.add(...cardBodyClass);

      // Append this card-body to this card
      appendChild(card, card_body);

      // create an "a" element added class,href 
      let link_btn = createNode("a");
      let link_btn_class = ["btn", "btn-outline-primary"];
      link_btn.classList.add(...link_btn_class);
      link_btn.href = website_url;
      link_btn.innerHTML = `Visit `;

      // Append this to card-body
      appendChild(card_body, link_btn);

      // create an "i" element add class
      let icon = createNode("i");
      let icon_class = ["bi", "bi-globe"];
      icon.classList.add(...icon_class);

      // Append to this anchor element
      appendChild(link_btn, icon);

    });

  } catch (err) {
    console.log(err.message);
  }

};

// Add an event listener
getBtn.addEventListener('click', getData);

// getData();
