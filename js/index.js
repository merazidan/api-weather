

let btnFind=document.querySelector(".search button");
let inputSearch = document.getElementById('search');


let day=document.getElementById("day")
let date=document.getElementById("date")
let nameOfCountry = document.getElementById("nameofcountry");
let degree=document.getElementById('degree')
let imgOfStatus=document.querySelector('.row img')
let wetherStatus= document.getElementById('weatherstatus')
let humidityy=document.getElementById("humadity");
let wind =document.getElementById('wind')
let compass =document.getElementById('compass')
let days=[
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
]
let month=[
'January' ,
'February',
'March',
'April ',
'May' ,
'June',
'July ',
'August',
'September',
'October',
'November',
'December'
];
let nextDay=document.getElementsByClassName("nextday");
let iconNextDay= document.getElementsByClassName("icon-nextday");
let degreeNextday=document.getElementsByClassName("degree-nextday");
let weatherStatus=document.getElementsByClassName("weatherstatus");
let minDegreeOfNextDay=document.getElementsByClassName("min-degree-nextday")



btnSubscribe=document.getElementById("btnsubscribe")
searchSubscribe=document.getElementById("searchsubscribe")
 let myResponse;
 let responseData;



 async function getWeather(currentCity='cairo'){
  myResponse= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c1848ee50ee5492bb43223423222310&q=${currentCity}&days=3`);
  responseData = await myResponse.json()
 displayTodayWeather()
 displayNextDaysWeather()
}


function displayTodayWeather(){
    let dateToday =new Date();
day.innerHTML=days[dateToday.getDay()]
date.innerHTML= `${dateToday.getDate()} ${month[dateToday.getMonth()]}`
nameOfCountry.innerHTML=responseData.location.name;
degree.innerHTML=responseData.current.temp_c;
imgOfStatus.setAttribute('src',`https:${responseData.current.condition.icon}`)
     wetherStatus.innerHTML=responseData.current.condition.text;
     humidityy.innerHTML=responseData.current.humidity;
     wind.innerHTML=responseData.current.wind_kph;
     compass.innerHTML= responseData.current.wind_dir;

       
}

   function displayNextDaysWeather(){
for(let i=0;i<nextDay.length ;i++){
    nextDay[i].innerHTML= days[new Date(responseData.forecast.forecastday[i+1].date).getDay()]
    iconNextDay[i].setAttribute('src',`https:${responseData.forecast.forecastday[i+1].day.condition.icon}`)
    degreeNextday[i].innerHTML=responseData.forecast.forecastday[i+1].day.maxtemp_c;
    minDegreeOfNextDay[i].innerHTML=responseData.forecast.forecastday[i+1].day.mintemp_c;
    weatherStatus[i].innerHTML=responseData.forecast.forecastday[i+1].day.condition.text
}

   }
   inputSearch.addEventListener("keyup" ,function(){
currentCity=inputSearch.value;
getWeather(currentCity)
   })

getWeather()
   
btnSubscribe.addEventListener('click',function(){
    searchSubscribe.value=''
}
)