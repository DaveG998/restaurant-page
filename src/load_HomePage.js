import imgChefs from "./Wok-of-Love.jpg";
import "./style_home.css";

export default function load_HomePage() {
  const header_h1 = document.createElement("h1");
  header_h1.textContent = "서울 향토 맛의 정원";
  header_h1.classList.add("heading");

  const header_h3 = document.createElement("h3");
  header_h3.textContent = "(Seoul Hyangto Mat-ui Jeongwon)";
  header_h3.classList.add("heading-lower");

  const imgRestaurant = document.createElement("img");
  imgRestaurant.classList.add("restaurantImg");
  imgRestaurant.src = imgChefs;

  const welcomeText = document.createElement("p");
  welcomeText.classList.add("welcomeText");
  welcomeText.textContent = `환영합니다! Welcome to Seoul Spice Haven, where Korean flavors shine.
     Explore a menu filled with authentic delights and savor the essence
      of our rich culinary heritage. 즐거운 식사를! (Enjoy your meal!)`;

  const homeContent = document.createElement("div");
  homeContent.classList.add("homeContent");

  homeContent.appendChild(header_h1);
  homeContent.appendChild(header_h3);
  homeContent.appendChild(imgRestaurant);
  homeContent.appendChild(welcomeText);

  const content = document.querySelector("#content");
  content.appendChild(homeContent);
}
