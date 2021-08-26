import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

import countriesTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';
import fetchCountries from './fetchCountries';

import { refs } from './refs';
import debounce from 'lodash.debounce';


refs.inputElem.addEventListener('input', debounce(onInputSearch, 500));


function onInputSearch() {

    clearInput();

    const searchQuery = refs.inputElem.value;

    fetchCountries(searchQuery)
        .then(country => {
            if (country.length > 10) {
                error({ text: 'Too many matches! Please, type a more specific query!' });
            } else if (country.status === 404) {
                console.log(country.status);
                error({ text: 'There is no such country! Please, type a more specific query!' });
            } else if (country.length === 1) {
                countryMarkup(country);
            } else if (country.length <= 10) {
                countriesMarkup(country);
            }
        })
        .catch(fetchError);
}


function countryMarkup(country) {
    refs.containerElem.innerHTML = countryTpl(country);

}

function countriesMarkup(country) {
    const markup = countriesTpl(country);
    refs.countriesList.insertAdjacentHTML('beforeend', markup);
}

function clearInput() {
    refs.containerElem.innerHTML = '';
    refs.countriesList.innerHTML = '';
}

function fetchError(Error) {
    Error;
}