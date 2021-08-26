import countriesTpl from './templates/countries.hbs';
import countryTpl from './templates/country.hbs';
import refs from './refs';

function countryMarkup() {
    refs.containerElem.innerHTML=countryTpl(data);

}
function countriesMarkup(){
    const markup = countriesTpl(data);
    refs.countriesList.insertAdjacentHTML('beforeend', markup);
}

function clearCountryContainer(){
    refs.containerElem.innerHTML = " ";
}

function clearCountriesList(){
    refs.countriesList.innerHTML = " ";

}

function clearInput(){
    refs.inputElem.value= " ";
}

const notification = 'Too many matches found. Please enter a more specific query!'


export {
    countryMarkup,
    countriesMarkup,
    clearCountryContainer,
    clearCountriesList,
    clearInput,
    notification,
}