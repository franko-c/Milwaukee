// Define an array of facts about Milwaukee
const facts = [
  "Milwaukee is the only place where cheese curds have been known to spontaneously squeak in delight.",
  "The official bird of Milwaukee is the seagull, known for its impeccable aim when it comes to stealing food.",
  "Milwaukeeans have a secret handshake involving bratwurst and a cold beer.",
  "The city of Milwaukee runs on a combination of beer, cheese, and the undying love for the Green Bay Packers.",
  "In Milwaukee, it's not uncommon to see people paddleboarding down the streets during a particularly heavy rainstorm.",
  "Milwaukeeans have a sixth sense for finding the best custard stands within a 10-mile radius.",
  "The Milwaukee River is known to have a mysterious creature called the 'Brew Nessie' that surfaces only during beer festivals.",
  "Milwaukeeans have an annual 'Sausage Olympics' where competitors race to see who can eat the most bratwurst in a minute.",
  "In Milwaukee, winter is considered a sport, and residents train for it by perfecting their snowball-throwing techniques.",
  "Milwaukeeans have a secret underground network of tunnels that connect all the best breweries in the city."
];

// Linking various elements from our webpage to our JS file
const button = document.getElementById("facts-button");
const factOutput = document.getElementById("facts-field");

// Function that generates a random number based on the length of the facts array
function randomFactPicker() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  return randomIndex;
}

// Creating an event listener that runs a function when the "Learn Stuff" button is clicked
button.addEventListener("click", function () {
  // Assigning a random int based on the length of the facts array to "i"
  let i = randomFactPicker();
  // Assigning a random fact (by using facts[i] where i is a random number) to a variable
  let randFact = facts[i];
  // Modifying the contents of the text element on the webpage to display one of our random facts
  factOutput.textContent = `${randFact}`;
});
