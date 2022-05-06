// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // TODO: call the Simple Map's addObservation method for every one
  // of the observations in order to add markers to the map.
  observations.forEach((elem) => {
    map.addObservation(elem);
  });
}

// Update the table to show markers for the set of observations
function updateCard(observations) {
  // Remove any current data from the card
  clearAllCards();

  // Populate the card with all observation data we want to show
  observations.forEach((observation) => {
    // TODO: call the buildRowForObservation function with the current observation
    // and use that to add it to the table with the addRowToTable function.
    buildCardForObservation(observation);
  });
}

// Generic function to show a set of observations with the given title
function showObservations(observations, title) {
  updateMap(observations, map);
  updateCard(observations);
  updateCardTitle(`${title} (${observations.length})`);
}//added

// Show all species on the map and card
function showAll() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();

  // Update the map and carc
  updateMap(observations, map);
  updateCard(observations);
  updateCardTitle(`All Species (${observations.length})`);
}

// Show native species on the map and card
function showOnlyNative() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  // Update the map and card
  updateMap(native, map);
  updateCard(native);
  updateCardTitle(`Only Native Species (${native.length})`);
}

// Show introduced species on the map and card
function showOnlyIntroduced() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  // Update the map and card
  updateMap(introduced, map);
  updateCard(introduced);
  updateCardTitle(`Only Introduced Species (${introduced.length})`);
}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // Show all species observations by default when we start.
  showAll();

  // TODO: create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).

  let allSpecies = document.querySelector("#show-all");
  let nativeSpecies = document.querySelector("#show-native");
  let introSpecies = document.querySelector("#show-introduced");

  allSpecies.addEventListener("click", function () {
    showAll();
  });

  nativeSpecies.addEventListener("click", function () {
    showOnlyNative();
  });

  introSpecies.addEventListener("click", function () {
    showOnlyIntroduced();
  });

  // Connect the search form
  const searchForm = document.querySelector("form");
  searchForm.onsubmit = function (event) {
    // Stop the form from trying to submit over the network. We'll process the data here.
    event.preventDefault();

    // TODO - get the value from the search form input and pass it to the
    // search() function (already defined in js/search.js)
    search(document.getElementById("searchBar").value.trim());
    console.log("TODO - call search() function with value from search form");
  };
  showAll();
}

// TODO: replace this console.log with the code necessary to call the start
// function when the page has finished fully loading.
window.onload = () => start();