window.addEventListener("load", ()=>{
    let temperatureDescription = document.querySelector(".temperature-description-veles");
    let temperatureDegree = document.querySelector(".temperature-degree-veles");
    let hum = document.querySelector(".humidity-veles");
    let feels = document.querySelector(".feels-like-veles");
    let pres = document.querySelector(".presure-veles");
    let visib = document.querySelector(".windSpeed-veles");

       
            const api = `https://api.openweathermap.org/data/2.5/weather?q=Veles,MK&appid=8fef543c9807d83ef26b3d912dbb664b`;
            fetch(api) 
            .then(response => {
                return response.json();
            })
            .then (data=> {
               console.log(data);
               //temperatura
                const{temp} = data.main;
                const x = data.main.temp;
                const y = x - 273.15;                 
                const z = Math.floor(y);
                temperatureDegree.textContent = z;

                //description
                const{description} = data.weather["0"];
                temperatureDescription.textContent = description; 

                //Vlaznost
                const{humidity} = data.main;
                hum.textContent = humidity + "%";

                //feels like
                const{feels_like} = data.main;
                const data_main = data.main.feels_like;
                const toCels = data_main - 273.15;
                const toFloor = Math.floor(toCels)
                feels.textContent = toFloor;

                //pritisok
                const{pressure} = data.main;
                pres.textContent = pressure + " mBar";

                //veter
                const{speed} = data.wind;
                visib.textContent = speed + " km/h";


            })  
        });

   
// za Skopje
        window.addEventListener("load", ()=>{
            let temperatureDescription = document.querySelector(".temperature-description-skopje");
            let temperatureDegree = document.querySelector(".temperature-degree-skopje");
            let hum = document.querySelector(".humidity-skopje");
            let feels = document.querySelector(".feels-like-skopje");
            let pres = document.querySelector(".presure-skopje");
            let visib = document.querySelector(".windSpeed-skopje");
        
               
            const api = `https://api.openweathermap.org/data/2.5/weather?q=Gevgelija,MK&appid=8fef543c9807d83ef26b3d912dbb664b`;
                    fetch(api) 
                    .then(response => {
                        return response.json();
                    })
                    .then (data=> {
                       console.log(data);
                       //temperatura
                        const{temp} = data.main;
                        const x = data.main.temp;
                        const y = x - 273.15;                 
                        const z = Math.floor(y);
                        temperatureDegree.textContent = z;
        
                        //description
                        const{description} = data.weather["0"];
                        temperatureDescription.textContent = description; 
        
                        //Vlaznost
                        const{humidity} = data.main;
                        hum.textContent = humidity + "%";
        
                        //feels like
                        const{feels_like} = data.main;
                        const data_main = data.main.feels_like;
                        const toCels = data_main - 273.15;
                        const toFloor = Math.floor(toCels)
                        feels.textContent = toFloor;
        
                        //pritisok
                        const{pressure} = data.main;
                        pres.textContent = pressure + " mBar";
        
                        //veter
                        const{speed} = data.wind;
                        visib.textContent = speed + " km/h";
        
        
                    })  
                });
        
// za Prilep

window.addEventListener("load", ()=>{
    let temperatureDescription = document.querySelector(".temperature-description-prilep");
    let temperatureDegree = document.querySelector(".temperature-degree-prilep");
    let hum = document.querySelector(".humidity-prilep");
    let feels = document.querySelector(".feels-like-prilep");
    let pres = document.querySelector(".presure-prilep");
    let visib = document.querySelector(".windSpeed-prilep");

       
            const api = `https://api.openweathermap.org/data/2.5/weather?q=Tetovo,MK&appid=8fef543c9807d83ef26b3d912dbb664b`;
            fetch(api) 
            .then(response => {
                return response.json();
            })
            .then (data=> {
               console.log(data);
               //temperatura
                const{temp} = data.main;
                const x = data.main.temp;
                const y = x - 273.15;                 
                const z = Math.floor(y);
                temperatureDegree.textContent = z;

                //description
                const{description} = data.weather["0"];
                temperatureDescription.textContent = description; 

                //Vlaznost
                const{humidity} = data.main;
                hum.textContent = humidity + "%";

                //feels like
                const{feels_like} = data.main;
                const data_main = data.main.feels_like;
                const toCels = data_main - 273.15;
                const toFloor = Math.floor(toCels)
                feels.textContent = toFloor;

                //pritisok
                const{pressure} = data.main;
                pres.textContent = pressure + " mBar";

                //veter
                const{speed} = data.wind;
                visib.textContent = speed + " km/h";


            })  
        });
