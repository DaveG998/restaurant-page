import bbq_beef from "./bbq-beef.jpg";
import bbq_pork from "./bbq-pork.jpg";
import chicken_noddle_soup from "./chicken-noodle-soup.jpg";
import donkatsu from "./donkatsu.jpg";
import "./style_menu.css";

export default function load_HomePage() {
  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");

  menuContent.appendChild(
    createCard(
      bbq_beef,
      "BULGOGI (KOREAN BBQ BEEF)",
      "Savor the perfection of our Bulgogi, a Korean BBQ sensation.",
      "7.30 €"
    )
  );

  menuContent.appendChild(
    createCard(
      bbq_pork,
      "KOREAN BBQ PORK",
      "Discover the culinary allure of our Korean BBQ Pork, a tantalizing feast for your senses.",
      "12.85 €"
    )
  );

  menuContent.appendChild(
    createCard(
      chicken_noddle_soup,
      "CHICKEN NOODLE SOUP (DAK KALGUKSU)",
      "Experience comfort on a plate with our Chicken Noodle Soup (Dak Kalguksu).",
      "9.50 €"
    )
  );

  menuContent.appendChild(
    createCard(
      donkatsu,
      "DONKATSU (KOREAN STYLE PORK CUTLET)",
      "Elevate your taste buds with our Donkatsu, a Korean-style Pork Cutlet that's a crispy delight.",
      "13.85 €"
    )
  );

  const content = document.querySelector("#content");
  content.appendChild(menuContent);
}

function createCard(imgSrc, heading, description, price) {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgCardWrapper = document.createElement("div");
  imgCardWrapper.classList.add("imgCardWrapper");

  const imgCard = document.createElement("img");
  imgCard.classList.add("imgCard");
  imgCard.src = imgSrc;

  const headingCard = document.createElement("h3");
  headingCard.classList.add("headingCard");
  headingCard.textContent = heading;

  const descriptionCard = document.createElement("p");
  descriptionCard.classList.add("descriptionCard");
  descriptionCard.textContent = description;

  const priceCard = document.createElement("p");
  priceCard.classList.add("priceCard");
  priceCard.textContent = price;

  imgCardWrapper.appendChild(imgCard);
  card.appendChild(imgCardWrapper);
  card.appendChild(headingCard);
  card.appendChild(descriptionCard);
  card.appendChild(priceCard);

  return card;
}
