
const form = document.querySelector("form");
input = document.querySelector("input"),
div = document.querySelector(".error"),
temperature = document.querySelector(".currentWeather"),
max_temperature= document.querySelector(".high"),
min_temperature= document.querySelector(".low"),
humidity = document.querySelector(".humidity"),
sky = document.querySelector(".typeOfSky"),
country = document.querySelector(".countryName"),
weatherIcons = document.querySelector(".imgimgimg"),
apiKey = "d3a53378f7df84f93b55486f132d1040";

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    if((input.value).length == 0){
        div.innerHTML = "Please Enter Your Location"
    }else{
        
       Country = input.value
    }
    
    const apiSearchByInputValue = `https://api.openweathermap.org/data/2.5/forecast?q=${Country}&lang=en&units=metric&appid=${apiKey}`;
    fetch(apiSearchByInputValue)
        .then(response =>{
            return response.json();
            
        })
        
        .then(data =>{
            console.log(data)
            temperature.innerHTML = Math.round(data.list[0].main.temp) + "°"
            max_temperature.innerHTML = Math.round(data.list[0].main.temp_max) + "°"
            min_temperature.innerHTML = Math.round(data.list[0].main.temp_min) + "°"
            country.innerHTML = data.city.name
             
            sky.innerHTML = data.list[0].weather[0].description
            let icon = data.list[0].weather[0].icon,
            firstDayicon = `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`,
            secondDayicon =`http://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`,
            iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            console.log(iconUrl)
            weatherIcons.src = iconUrl
            document.querySelector(".firstDayweather").innerHTML = Math.round(data.list[2].main.temp) + "°"
                    document.querySelector(".secondDayweather").innerHTML = Math.round(data.list[10].main.temp) + "°"
                    
                    document.querySelector(".firstDay").src = firstDayicon
                    document.querySelector(".secondDay").src = secondDayicon
                    
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
                const apiSearchByLat_Long = `https://api.openweathermap.org/data/2.5/forecast?lat=${long}&lon=${lat}&lang=en&units=metric&appid=${apiKey}`
                 console.log(long)
                 console.log(lat)
             fetch(apiSearchByLat_Long)
                .then(response =>{
                    return response.json();   
                })               
                .then(data =>{
                    console.log(data)
                    country.innerHTML = data.city.name
                    temperature.innerHTML = Math.round(data.list[0].main.temp) + "°"
                    max_temperature.innerHTML = Math.round(data.list[0].main.temp_max) + "°"
                    min_temperature.innerHTML = Math.round(data.list[0].main.temp_min) + "°"
                   
                    sky.innerHTML = data.list[0].weather[0].description
                    let icon = data.list[0].weather[0].icon,
                        firstDayicon = `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`,
                        secondDayicon =`http://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`,
                    iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                    weatherIcons.src = iconUrl
                    document.querySelector(".firstDayweather").innerHTML = Math.round(data.list[2].main.temp) + "°"
                    document.querySelector(".secondDayweather").innerHTML = Math.round(data.list[10].main.temp) + "°"
                    document.querySelector(".firstDay").src = firstDayicon
                    document.querySelector(".secondDay").src = secondDayicon
                })
                
        })
    }
});
    
