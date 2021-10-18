//
let fetchResults = [];

fetch("https://rickandmortyapi.com/api/location")
  .then(function (response) {
    return response.json();
  })
  .then(function (location) {
    fetchResults = location.results;
    displayResults();
  });

const handleSubmit = () => {
  let option = document.getElementById("location").value;
  switch (option) {
    case "location-one":
      displayResults(0);
      break;

    case "location-two":
      displayResults(1);
      break;

    case "location-three":
      displayResults(2);
      break;

    case "location-four":
      displayResults(3);
      break;

    case "location-five":
      displayResults(4);
      break;

    case "location-six":
      displayResults(5);
      break;

    case "location-seven":
      displayResults(6);
      break;

    case "location-eight":
      displayResults(7);
      break;

    case "location-nine":
      displayResults(8);
      break;

    case "location-ten":
      displayResults(9);
      break;

    case "location-eleven":
      displayResults(10);
      break;

    case "location-twelve":
      displayResults(11);
      break;

    case "location-thirteen":
      displayResults(12);
      break;

    case "location-fourteen":
      displayResults(13);
      break;

    case "location-fifteen":
      displayResults(14);
      break;

    case "location-sixteen":
      displayResults(15);
      break;

    case "location-seventeen":
      displayResults(16);
      break;

    case "location-eighteen":
      displayResults(17);
      break;

    case "location-nineteen":
      displayResults(18);
      break;

    case "location-twenty":
      displayResults(19);
      break;

    default:
      console.log("oops, broh");
      break;
  }
};

let submit = document.getElementById("submit");
let mobileSubmit = document.getElementById("mobile-submit");

submit.addEventListener("click", handleSubmit);
mobileSubmit.addEventListener("click", handleSubmit);

async function displayResults(arrayBucket = 0) {
  let results = document.getElementById("results");

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  let residents = fetchResults[arrayBucket].residents;
  let name = fetchResults[arrayBucket].name;
  let type = fetchResults[arrayBucket].type;
  let dimension = fetchResults[arrayBucket].dimension;

  let displayName = document.createElement("h2");
  let displayType = document.createElement("h2");
  let displayDimension = document.createElement("h2");

  displayName.innerHTML = `Name: ${name}`;
  displayType.innerHTML = `Type: ${type}`;
  displayDimension.innerHTML = `Dimension: ${dimension}`;

  results.appendChild(displayName);
  results.appendChild(displayType);
  results.appendChild(displayDimension);

  let residentsHeader = document.createElement("h4");
  residentsHeader.innerHTML = "Residents:";
  results.appendChild(residentsHeader);

  for (let i = 0; i < residents.length; i++) {
    let imageFetch = await fetch(residents[i]);
    let resultImageFetch = await imageFetch.json();

    let image = resultImageFetch.image;
    let charName = resultImageFetch.name;
    let status = resultImageFetch.status;
    let species = resultImageFetch.species;
    let gender = resultImageFetch.gender;
    let origin = resultImageFetch.origin.name;
    let location = resultImageFetch.location.name;

    const card = document.createElement("div");

    card.innerHTML = `<div class="card mx-auto text-center" style="width: 30rem;">
  <img src="${image}" class="card-img-top" alt="${charName}">
  <div class="card-body">
    <h5 class="card-title"${charName}></h5>
    <p class="card-text">Status: ${status}</p>
    <p class="card-text">Species: ${species}</p>
    <p class="card-text">Gender: ${gender}</p>
    <p class="card-text">Origin: ${origin}</p>
    <p class="card-text">Last known location: ${location}</p>
  </div>
</div>`;

    results.appendChild(card);
  }
}
