
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
        locationSwitch(location)
        // console.log(location.results[0]);
        //     for (i = 0; i < location.results.length; i++) {
            //     console.log(location.results[i])
            //     let residents = location.results[i].residents
            //     for (c = 0; c <residents.length; c++) {
                //         console.log(residents[c])
                //         fetch(residents[c])
                //             .then(function (response){
                    //             return response.json();
                    //             }).then(function (charInfo)  {
                        //             console.log(charInfo.name);
                        //             console.log(charInfo.status);
                        //             console.log(charInfo.species);
                        //             console.log(charInfo.gender);
                        //             console.log(charInfo.image); 
                        //         })
                        //     }
                        //   }
                    })
                    
                    function locationSwitch (location) {
                        let submit = document.getElementById("submit")
                        submit.addEventListener("click", ()=>{
                        let option = document.getElementById("location").value
                        switch (option) {
                            case "location-one":
                                console.log(location.results[0])
                                let loc1 = location.results[0];
                                displayResults(loc1);
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


                        // console.log(location.results[0]);
                        // console.log(location.results[1]);
                        // console.log(location.results[2]);
                        // console.log(location.results[3]);
                        // console.log(location.results[4]);
                        // console.log(location.results[5]);
        }

            function displayResults(path) {
            //   console.log(path.name);
              
              
              let results = document.getElementById("results");
              
              while (results.firstChild) {
                results.removeChild(results.firstChild);
            }

              let name = path.name;
              let type = path.type
              let dimension = path.dimension

              let displayName = document.createElement("h2");
              let displayType = document.createElement("h2");
              let displayDimension = document.createElement("h2");


              displayName.innerText = `Name: ${name}`;
              displayType.innerHTML = `Type: ${type}`;
              displayDimension.innerHTML = `Dimension: ${dimension}`;


              results.appendChild(displayName);
              results.appendChild(displayType);
              results.appendChild(displayDimension);

            }

        