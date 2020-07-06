
const form = document.querySelector("form");
const input = document.querySelector("input");
const div = document.querySelector(".error")
const temperature = document.querySelector(".temp"),
max_temperature= document.querySelector(".max_temp"),
min_temperature= document.querySelector(".min_temp"),
humidity = document.querySelector(".humidity"),
name = document.querySelector(".name"),
sky = document.querySelector(".sky"),
country = document.querySelector(".country"),
apiKey = "d3a53378f7df84f93b55486f132d1040";

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    if((input.value).length == 0){
        div.innerHTML = "Please Enter Your Location"
    }else{
        div.style.display = "none"
       Country = input.value
    }
    
    const apiSearchByInputValue = `https://api.openweathermap.org/data/2.5/weather?q=${Country}&units=metric&appid=${apiKey}`;
    fetch(apiSearchByInputValue)
        .then(response =>{
            return response.json();
            
        })
        
        .then(data =>{
            // console.log(data)
            
                let 
                todayTemp = data.main.temp,
                max_temp = data.main.temp_max,
                min_temp = data.main.temp_min,
                Humidity = data.main.humidity,
                Name = data.name.toString(),
                place = data.sys.country
                
                skyType = data.weather[0].description;
            
             

            // console.log(todayTemp,skyType,max_temp,min_temp,humidity,name,)
            temperature.innerHTML = todayTemp + " C"
            max_temperature.innerHTML = max_temp + " C"
            min_temperature.innerHTML = min_temp + " C"
            humidity.innerHTML = Humidity
            name.innerHTML = Name
            country.innerHTML = place
            sky.innerHTML = skyType
        })
        // console.log(country)
        
})

      window.addEventListener("load", ()=>{
          status = navigator.onLine;
        //   console.log(status)
        if(status == "false"){
            alert("You Have no Internet Connection ")
        }
        let lat;
        let long;
        
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                lat = position.coords.longitude;
                long = position.coords.latitude;
                const apiSearchByLat_Long = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`
                 console.log(long)
                 console.log(lat)
               
                
                
             fetch(apiSearchByLat_Long)
                .then(response =>{
                    return response.json();
                    
                })
                
                .then(data =>{
                    console.log(data)
                    let
                    local_temp = data.main.temp,
                    local_max_temp = data.main.temp_max,
                    local_min_temp = data.main.temp_min,
                    local_humidity = data.main.humidity,
                    local_name = data.name,
                    local_place = data.sys.country,
                    local_skyType = data.weather[0].description;

                    temperature.innerHTML = local_temp + " C"
                    max_temperature.innerHTML = local_max_temp + " C"
                    min_temperature.innerHTML = local_min_temp + " C"
                    humidity.innerHTML = local_humidity
                    name.innerHTML = local_name
                    country.innerHTML = local_place
                    sky.innerHTML = local_skyType

                })
                
       })
        }
    });
    
