const locationSelector = document.getElementById('location-selector');
const submitBtn = document.getElementById('submit-btn');

const resultsContainer = document.getElementById('results-container');

let results = [];

function displayResults(resultsIndex = 0) {
  const { name, type, dimension, residents } = results[resultsIndex];

  resultsContainer.innerHTML = `
    <h3>Name: ${name}</h3>
    <h3>Type: ${type}</h3>
    <h3>Dimension: ${dimension}</h3>
    <h4>Residents: </h4>
  `;

  for (const resident of residents) {
    fetch(resident)
      .then((resp) => resp.json())
      .then((resident) => {
        resultsContainer.innerHTML += `
        <div class="resident-card">
          <img src="${resident.image}" />
          <h5>${resident.name}</h5>
          <p>Status: ${resident.status}</p>
          <p>Species: ${resident.species}</p>
          <p>Gender: ${resident.gender}</p>
          <p>Origin: ${resident.origin.name}</p>
          <p>Location: ${resident.location.name}</p>
        </div>
        `;
      });
  }
}

submitBtn.onclick = () => {
  switch (locationSelector.value) {
    case 'location-one':
      displayResults(0);
      break;

    case 'location-two':
      displayResults(1);
      break;

    case 'location-three':
      displayResults(2);
      break;

    case 'location-four':
      displayResults(3);
      break;

    case 'location-five':
      displayResults(4);
      break;

    case 'location-six':
      displayResults(5);
      break;

    case 'location-seven':
      displayResults(6);
      break;

    case 'location-eight':
      displayResults(7);
      break;

    case 'location-nine':
      displayResults(8);
      break;

    case 'location-ten':
      displayResults(9);
      break;

    case 'location-eleven':
      displayResults(10);
      break;

    case 'location-twelve':
      displayResults(11);
      break;

    case 'location-thirteen':
      displayResults(12);
      break;

    case 'location-fourteen':
      displayResults(13);
      break;

    case 'location-fifteen':
      displayResults(14);
      break;

    case 'location-sixteen':
      displayResults(15);
      break;

    case 'location-seventeen':
      displayResults(16);
      break;

    case 'location-eighteen':
      displayResults(17);
      break;

    case 'location-nineteen':
      displayResults(18);
      break;

    case 'location-twenty':
      displayResults(19);
      break;

    default:
      console.log('oops, broh');
      break;
  }
};

// initialize
fetch('https://rickandmortyapi.com/api/location')
  .then((resp) => resp.json())
  .then((jsonData) => {
    results = jsonData.results;
    displayResults();
  });
