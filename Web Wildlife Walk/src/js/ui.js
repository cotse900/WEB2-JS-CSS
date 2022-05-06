//Note: these card funcs are borrowed from elsewhere. I had no instructions to follow.
// Add the text to the <span>...<span> element in the element with id=table-title
function updateCardTitle(title) {
  newTitle = document.querySelector("#card-title span");
  newTitle.innerText = title;
}

// Remove all content from the table body element with id=rows
function clearAllCards() {
  let cards = document.querySelector("#observation-cards");
  while (cards.lastElementChild){
    cards.removeChild(cards.lastElementChild);
  }
}

// Given a string of text, create and return a TextNode
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
function createText(text) {
  return document.createTextNode(text);
}

function addCard(card) {
  const cards = document.querySelector("#observation-cards");
  cards.appendChild(card);
}//added

// create and return an anchor element.
// <a href="http://en.wikipedia.org/wiki/Muskrat">Muskrat</a>.  NOTE:
// The innerContent will be a TextNode or HTML Img Element (i.e., it
// won't be simple text).
function createAnchor(href, innerContent) {
  let anchor = document.createElement("a");
  anchor.href = href;
  anchor.appendChild(createText(innerContent));
  return anchor;
}

//It accepts an observation’s photo URL
function cardImg(url) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "card-img");
  url = url.replace("square", "medium");
  newDiv.style.backgroundImage = `url(${url})`;
  return newDiv;
}

//It accepts observation properties and use them to create the card’s body (a <div>).
function cardBody(name, date, uri, wikipediaUrl) {
  let newDiv = document.createElement("div");
  let h4 = document.createElement("h4");
  let h3 = document.createElement("h3");
  date = date.toISOString().split("T")[0];
  newDiv.setAttribute("class", "card-body");
  h3.appendChild(createAnchor(wikipediaUrl, name));
  h4.appendChild(createAnchor(uri, date));
  newDiv.appendChild(h3);
  newDiv.appendChild(h4);
  return newDiv;
}

//It accepts observation properties and use them to create the icons
function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "card-icons");
  if (isNative) {
    let element = document.createElement("i");
    element.setAttribute("class", "fas fa-leaf");
    element.title = "Native";
    newDiv.appendChild(element);
  }
  if (isIntroduced) {
    let element = document.createElement("i");
    element.setAttribute("class", "fas fa-frog");
    element.title = "Introduced";
    newDiv.appendChild(element);
  }
  if (isThreatened) {
    let element = document.createElement("i");
    element.setAttribute("class", "fas fa-radiation-alt");
    element.title = "Threatened";
    newDiv.appendChild(element);
  }
  if (isEndangered) {
    let element = document.createElement("i");
    element.setAttribute("class", "fas fa-skull-crossbones");
    element.title = "Endangered";
    newDiv.appendChild(element);
  }
  return newDiv;
}

//It creates cards for each observation, and add them to your observation-cards div
function buildCardForObservation(observation) {
  let div = document.createElement("div");
  div.setAttribute("class", "card");
  div.id = observation.id;
  div.appendChild(cardImg(observation.photoUrl));
  div.appendChild(
    cardBody(
      observation.name,
      observation.date,
      observation.uri,
      observation.wikipediaUrl
    )
  );
  div.appendChild(
    cardIcons(
      observation.isNative,
      observation.isIntroduced,
      observation.isThreatened,
      observation.isEndangered
    )
  );
  document.querySelector("#observation-cards").appendChild(div);
  return div;
}

// Return a proper time element with its dateTime property set:
// <time datetime="2020-09-18">2020-09-18</time>
function createTime(formatted) {//added
  var tmp = formatted.split("/");
  if (parseInt(tmp[0]) < 10){
    tmp[0] = "0" + tmp[0];
  }
  if (parseInt(tmp[1]) < 10){
    tmp[1] = "0" + tmp[1];
  }
  tmp = `${tmp[2]}-${tmp[0]}-${tmp[1]}`;
  var time = document.createElement("time");
  time.dateTime = tmp;
  time.appendChild(createText(tmp));
  return time;
}

// Given a boolean value (true/false) return a string "Yes" or "No"
function toYesNo(value) {
  var result = true;
  if (value === true) {//
    result = "Yes";
  } else {
    result = "No";
  }
  return result;
}

function toggleLoading(isLoading) {
  // TODO - toggle the state of the Search button. When we click 'Search' we need to
  // indicate to the user that we're doing something (i.e., that we're Loading...).
  // We also need to change the icon from a search magnifying glass to an hourglass.
  // Finally, we need to disable the button, so the user doesn't click it multiple
  // times (i.e., we need to wait until the loading finishes).  We decide what to
  // do based on the value of the isLoading argument.
  let icon = document.getElementById("searchIcon");
  let searchButton = document.querySelector(".btn");
  if (isLoading) {
    icon.setAttribute("class", "fas fa-hourglass-half");
    icon.innerHTML = "&nbsp;&nbsp;Loading...";
    searchButton.disabled = true;
  } else {
    icon.setAttribute("class", "fas fa-search");
    icon.innerHTML = "&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;";
    searchButton.disabled = false;
  }
  console.log("TODO - toggle the state of the Search button to/from Loading");
}