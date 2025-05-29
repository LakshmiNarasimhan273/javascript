async function getWeather(){
    // Selecting our input tag with input value
    const city = document.getElementById("cityInput").value.trim();
    // Empty div to show loading animation and weather data
    const result = document.getElementById("weatherResult");
    // API Key from open weather map platform
    const apiKey = "7caf7f3845f0f5d96a4cb3e31edb2a68";

    // Condition to check the input field is empty or not
    if(!city){
        // Display the warning message when the input field is empty
        result.innerHTML = `<div class="alert alert-warning">Please enter a city name</div>`
        return;
    }
    // If the input field contains a city name initially display the loading animation
    result.innerHTML = `<div class="spinner-border text-success" role="status"></div>`

    // API Fetching with Exception handling - try, catch blocks

    try{
        // While fetching the weather api need to include the city name, inside the *query parameter* like this
        // ?q=${city} - this city variable contains our html input value
        // next we have appid - it contains our api key which we taken from the open weather map platform
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        // Condition to check the response data is received or not
        if(!response.ok){
            throw new Error("City not found")
        }
        // Once the data is received convert the same data into a json format
        const data = await response.json();

        // DOM(innerHTML) property to display all our api data
        result.innerHTML = `
        <h4>${data.name}, ${data.sys.country}</h4>
        <h4>${data.weather[0].main}</h4>
        <p>🌡️ ${data.main.temp}</p>
        <p>💧 ${data.main.humidity}</p>
        <p>💨 ${data.wind.speed}</p>
        `
    }catch(err){
        result.innerHTML = `<div class="alert alert-danger">${err}</div>`
    }
}