export default fetchCountries;


function fetchCountries(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(r => r.json())
        .catch(error => console.log(error))

}