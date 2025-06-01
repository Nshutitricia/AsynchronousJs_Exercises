async function countryDetails(country) {
    try {
        let countryFetch = await fetch(`https://restcountries.com/v3.1/name/${country}`)
        if(!countryFetch.ok){
            throw new Error(`HTTP Error: ${countryFetch.status}`);
        }
        let resCountry = await countryFetch.json()
        let weatherDetails = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${resCountry[0].latlng[0]}&longitude=${resCountry[0].latlng[1]}&current_weather=true`)
        if(!weatherDetails.ok){
            throw new Error(`HTTP Error: ${weatherDetails.status}`);
        }
        let resWeather = await weatherDetails.json()
        return {
          Country : resCountry[0].name.common,
          Capital: resCountry[0].capital[0],
          "Current Temperature":   resWeather.current_weather.temperature
        }
    } catch (error) {
        console.log(error.message)
    }
}
countryDetails('France').then(n=> console.log(n)).catch(e=>console.error(e.message))