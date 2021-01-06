let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");
//const proxy="https://cors-anywhere.herokuapp.com/";

searchButton.addEventListener("click",(e)=>
{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value="";

})
const getWeather=async(city)=>
{
    try
    {
        const api1=`api.openweathermap.org/data/2.5/weather?q=${city}&appid=`+key;
        fetch(api1).then((response)=>
        {
            return response.json();
        })
        .then(weatherData=>
            {
                const{name}=weatherData;
                const{feels_like}=weatherData.main;
                const{id,main}=weatherData.weather[0];
                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
                console.log(weatherData);
                if (id<300 && id>200)
                {
                    tempicon.src="thunderstorm.svg"
                }
                else if (id<400 && id>300)
                {
                    tempicon.src="cloud-and-sun.svg"
                }
                else if (id<600 && id>500)
                {
                    tempicon.src="rain.svg"
                }
                else if (id<700 && id>600)
                {
                    tempicon.src="atmosphere.svg"
                }
                else if (id<800 && id>700)
                {
                    tempicon.src="clouds-and-sun.svg"
                }
                if (id>=800)
                {
                    tempicon.src="snow.svg"
                }
            })
    }
    catch(error)
    {
        alert("City Not Found");
    }
}
window.addEventListener("load",()=>
{
let long;
let lat;
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition((position)=>
    {
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const api=`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=`+key;
        
        fetch(api).then((response)=>
        {
            return response.json();
        })
        .then(data=>
            {
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
                console.log(data);
                if (id<300 && id>200)
                {
                    tempicon.src="thunderstorm.svg"
                }
                else if (id<400 && id>300)
                {
                    tempicon.src="clouds-and-sun.svg"
                }
                else if (id<600 && id>500)
                {
                    tempicon.src="rain.svg"
                }
                else if (id<700 && id>600)
                {
                    tempicon.src="atmosphere.svg"
                }
                else if (id<800 && id>700)
                {
                    tempicon.src="clouds-and-sun.svg"
                }
                if (id==800)
                {
                    tempicon.src="snow.svg"
                }

                })
    }
    )}
}
)


