// fetch('https://rickandmortyapi.com/api/episode')
//     .then(function (response){
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//         episodes = data;

let fetchResults = [];

fetch('https://rickandmortyapi.com/api/location')
        .then(function (response) {
                return response.json();
        }).then(function (location) {
                fetchResults = (location.results)
                displayResults();
        })



let submit = document.getElementById("submit")
submit.addEventListener("click", () => {
        let option = document.getElementById("location").value
        switch (option) {
                case "location-one":
                        //console.log(residents, "Line 49");
                        displayResults(0);
                        break;


                case "location-two":
                        displayResults(1)
                        break;

                case "location-three":
                        displayResults(2)
                        break;

                case "location-four":
                        displayResults(3)
                        break;

                case "location-five":
                        displayResults(4)
                        break;

                case "location-six":
                        displayResults(5)
                        break;

                case "location-seven":
                        displayResults(6)
                        break;

                case "location-eight":
                        displayResults(7)
                        break;

                case "location-nine":
                        displayResults(8)
                        break;

                case "location-ten":
                        displayResults(9)
                        break;

                case "location-eleven":
                        displayResults(10)
                        break;

                case "location-twelve":
                        displayResults(11)
                        break;

                case "location-thirteen":
                        displayResults(12)
                        break;

                case "location-fourteen":
                        displayResults(13)
                        break;

                case "location-fifteen":
                        displayResults(14)
                        break;

                case "location-sixteen":
                        displayResults(15)
                        break;

                case "location-seventeen":
                        displayResults(16)
                        break;

                case "location-eighteen":
                        displayResults(17)
                        break;

                case "location-nineteen":
                        displayResults(18)
                        break;

                case "location-twenty":
                        displayResults(19)
                        break;

                default:
                        console.log("oops, broh")
                        break;
        }
})

async function displayResults(arrayBucket = 0) {
        //   console.log(path.name);
        // console.log(residents);
        let results = document.getElementById("results");

        while (results.firstChild) {
                results.removeChild(results.firstChild);
        }




        // let displayImage = document.createElement("img");
        // let displayCharName = document.createElement("h1");
        // let displayStatus = document.createElement("h3");
        // let displaySpecies = document.createElement("h3");
        // let displayGender = document.createElement("h3");



        // let image = residents[i].image;
        // let charName = residents[i].name;
        // let status = residents[i].status;
        // let species = residents[i].species;
        // let gender = residents[i].gender;




        let residents = fetchResults[arrayBucket].residents
        let name = fetchResults[arrayBucket].name
        let type = fetchResults[arrayBucket].type
        let dimension = fetchResults[arrayBucket].dimension
        let displayName = document.createElement("h2");
        let displayType = document.createElement("h2");
        let displayDimension = document.createElement("h2");

        displayName.innerHTML = `Name: ${name}`;
        displayType.innerHTML = `Type: ${type}`;
        displayDimension.innerHTML = `Dimension: ${dimension}`;


        results.appendChild(displayName);
        results.appendChild(displayType);
        results.appendChild(displayDimension);

        for (let i = 0; i < residents.length; i++) {
                let imageFetch = await fetch(residents[i]);
                let resultImageFetch = await imageFetch.json()

                let image = resultImageFetch.image;
                let charName = resultImageFetch.name;
                let status = resultImageFetch.status;
                let species = resultImageFetch.species;
                let gender = resultImageFetch.gender;

                let displayImage = document.createElement("img");
                let displayCharName = document.createElement("h1");
                displayCharName.setAttribute("class", "charName");
                let displayStatus = document.createElement("h3");
                displayStatus.setAttribute("class", "description");
                let displaySpecies = document.createElement("h3");
                displaySpecies.setAttribute("class", "description")
                let displayGender = document.createElement("h3");
                displayGender.setAttribute("class", "description");

                displayImage.src = image;
                displayCharName.innerHTML = `Name: ${charName}`;
                displayStatus.innerHTML = `Status: ${status}`;
                displaySpecies.innerHTML = `Species: ${species}`;
                displayGender.innerHTML = `Gender: ${gender}`;

                let card = document.createElement("div");
                card.setAttribute("class", "card");

                let cardBody = document.createElement('div')
                cardBody.setAttribute("class", "cardBody")


                // displayCharName.innerHTML = charName;
                // displayStatus.innerHTML = status;
                // displaySpecies.innerHTML = species;
                // displayGender.innerHTML = gender;

                results.appendChild(card);
                card.appendChild(cardBody);
                cardBody.appendChild(displayImage);
                cardBody.appendChild(displayCharName);
                cardBody.appendChild(displayStatus);
                cardBody.appendChild(displaySpecies);
                cardBody.appendChild(displayGender);

                // results.appendChild(displayImage);
                // results.appendChild(displayCharName);
                // results.appendChild(displayStatus);
                // results.appendChild(displaySpecies);
                // results.appendChild(displayGender);


                // console.log(residents [i], i);
        }






        // displayImage.src = image;
        // displayCharName.innerHTML = charName;
        // displayStatus.innerHTML = status;
        // displaySpecies.innerHTML = species;
        // displayGender.innerHTML = gender;

        // create card
        // let card = document.createElement("div");
        // card.setAttribute("class", "card")

        // card body/content
        // let cardBody = document.createElement('div')
        // cardBody.setAttribute("class", "cardBody")

        // image in card
        // let charImage = document.createElement('img')
        // charImage.src = "your source"
        // charImage.alt = "image alt"
        // charImage.style.width = "100%"

        // character name
        // let charName = document.createElement('h1')
        // charName.innerText = "character name goes here"
        // charName.style.fontWeight = "600"

        // appending



        // results.appendChild(displayName);
        // results.appendChild(displayType);
        // results.appendChild(displayDimension);
        // results.appendChild(displayImage);
        // results.appendChild(displayCharName);
        // results.appendChild(displayStatus);
        // results.appendChild(displaySpecies);
        // results.appendChild(displayGender);

        // append card
        // results.appendChild(card)
        // card.appendChild(cardBody)
        // cardBody.appendChild(displayImage);
        // cardBody.appendChild(displayCharName);
        // cardBody.appendChild(displayStatus);
        // cardBody.appendChild(displaySpecies);
        // cardBody.appendChild(displayGender);


}