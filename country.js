//Display all the country flags in the console.
const url = "https://restcountries.com/v3.1/all"
const request = new XMLHttpRequest();
request.onload = function(){
    const data = JSON.parse(this.response);
    data.forEach(element => {
        console.log(element.flags)        
    });
};

request.open("GET",url);
request.send();


//Print all country names, region, subregion, population
const url = "https://restcountries.com/v3.1/all"
const request = new XMLHttpRequest();
request.onload = function(){
    const data = JSON.parse(this.response);
    data.forEach(element => {
        console.log(element.name);
        console.log(element.region);
        console.log(element.subregion);
        console.log(element.population);        
    });
};

request.open("GET",url);
request.send();

