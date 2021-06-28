// fetch('https://rickandmortyapi.com/api/episode')
//     .then(function (response){
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//         episodes = data;



fetch('https://rickandmortyapi.com/api/location')
        .then(function (response) {
                return response.json();
        }).then(function (location) {
                // locationSwitch(location)
                console.log(location.results)
                // console.log(location.residents[0])
                // console.log(location.results[0]);
                for (i = 0; i < location.results.length; i++) {
                        let residents = location.results[i].residents
                        //console.log(residents);
                    for (c = 0; c <residents.length; c++) {
                        // console.log(residents[c])
                        fetch(residents[c])
                            .then(function (response){
                            return response.json();
                            }).then(function (charInfo)  {
                        // console.log(residents);
                        locationSwitch(location, charInfo);
                //      console.log(charInfo.image);
                //      console.log(charInfo.status);
                //         console.log(charInfo.name);
                //         console.log(charInfo.species);
                //              console.log(charInfo.gender);                   
      
                        })
                    }
                  }
        })

function locationSwitch(location, charInfo) {
        let submit = document.getElementById("submit")
        submit.addEventListener("click", () => {
                let option = document.getElementById("location").value
                switch (option) {
                        case "location-one":
                                console.log(location.results[0])
                                let loc1 = location.results[0];
                                residents = charInfo;
                                //console.log(residents, "Line 49");
                                displayResults(loc1, residents);
                                break;

                        case "location-two":
                                console.log(location.results[1])
                                let loc2 = location.results[1];
                                displayResults(loc2);
                                break;

                        case "location-three":
                                console.log(location.results[2])
                                let loc3 = location.results[2];
                                displayResults(loc3);
                                break;

                        case "location-four":
                                console.log(location.results[3])
                                let loc4 = location.results[3];
                                displayResults(loc4);
                                break;

                        case "location-five":
                                console.log(location.results[4])
                                let loc5 = location.results[4];
                                displayResults(loc5);
                                break;

                        case "location-six":
                                console.log(location.results[5])
                                let loc6 = location.results[5];
                                displayResults(loc6);
                                break;

                        case "location-seven":
                                console.log(location.results[6])
                                let loc7 = location.results[6];
                                displayResults(loc7);
                                break;

                        case "location-eight":
                                console.log(location.results[7])
                                let loc8 = location.results[7];
                                displayResults(loc8);
                                break;

                        case "location-nine":
                                console.log(location.results[8])
                                let loc9 = location.results[8];
                                displayResults(loc9);
                                break;

                        case "location-ten":
                                console.log(location.results[9])
                                let loc10 = location.results[9];
                                displayResults(loc10);
                                break;

                        case "location-eleven":
                                console.log(location.results[10])
                                let loc11 = location.results[10];
                                displayResults(loc11);
                                break;

                        case "location-twelve":
                                console.log(location.results[11])
                                let loc12 = location.results[11];
                                displayResults(loc12);
                                break;

                        case "location-thirteen":
                                console.log(location.results[12])
                                let loc13 = location.results[12];
                                displayResults(loc13);
                                break;

                        case "location-fourteen":
                                console.log(location.results[13])
                                let loc14 = location.results[13];
                                displayResults(loc14);
                                break;

                        case "location-fifteen":
                                console.log(location.results[14])
                                let loc15 = location.results[14];
                                displayResults(loc15);
                                break;

                        case "location-sixteen":
                                console.log(location.results[15])
                                let loc16 = location.results[15];
                                displayResults(loc16);
                                break;

                        case "location-seventeen":
                                console.log(location.results[16])
                                let loc17 = location.results[16];
                                displayResults(loc17);
                                break;

                        case "location-eighteen":
                                console.log(location.results[17])
                                let loc18 = location.results[17];
                                displayResults(loc18);
                                break;

                        case "location-nineteen":
                                console.log(location.results[18])
                                let loc19 = location.results[18];
                                displayResults(loc19);
                                break;

                        case "location-twenty":
                                console.log(location.results[19])
                                let loc20 = location.results[19];
                                displayResults(loc20);
                                break;

                        default:
                                console.log("oops, broh")
                                break;
                }
        })
}

function displayResults(path, residents) {
        //   console.log(path.name);
        console.log(residents, "line 176");
        let results = document.getElementById("results");

        while (results.firstChild) {
                results.removeChild(results.firstChild);
        }
        
        let displayName = document.createElement("h2");
        let displayType = document.createElement("h2");
        let displayDimension = document.createElement("h2");
        let displayImage = document.createElement("img");
        let displayCharName = document.createElement("h1");
        let displayStatus = document.createElement("h3");
        let displaySpecies = document.createElement("h3");
        let displayGender = document.createElement("h3");

        let name = path.name;
        let type = path.type;
        let dimension = path.dimension;
        let charName = residents.name;
        let image = residents.image;
        // console.log(image, "Line 188");
        let status = residents.status;
        let species = residents.species;
        let gender = residents.gender;
        
        // for (let i = 0; i < residents.length; i++) {
        //         console.log(residents[i])
        //  }
        

        displayName.innerHTML = `Name: ${name}`;
        displayType.innerHTML = `Type: ${type}`;
        displayDimension.innerHTML = `Dimension: ${dimension}`;
        displayImage.src = image;
        displayCharName.innerHTML = charName;
        displayStatus.innerHTML = status;
        displaySpecies.innerHTML = species;
        displayGender.innerHTML = gender;

        // create card
        let card = document.createElement("div");
        card.setAttribute("class", "card")


        
        // card body/content
        let cardBody = document.createElement('div')
        cardBody.setAttribute("class", "cardBody")
        
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
        
        
        
        results.appendChild(displayName);
        results.appendChild(displayType);
        results.appendChild(displayDimension);
        results.appendChild(displayImage);
        results.appendChild(displayCharName);
        results.appendChild(displayStatus);
        results.appendChild(displaySpecies);
        results.appendChild(displayGender);
        
        // append card
        results.appendChild(card)
        card.appendChild(cardBody)
        cardBody.appendChild(displayImage);
        cardBody.appendChild(displayCharName);
        cardBody.appendChild(displayStatus);
        cardBody.appendChild(displaySpecies);
        results.appendChild(displayGender);
        

}