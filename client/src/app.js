const ListView = require('./views/listView');
const Request = require('./services/request.js');

const listView = new ListView();
const request = new Request("http://localhost:3000/api/countries")

const app = function(){
  const url = "https://restcountries.eu/rest/v2/all"
  const deleteButton = document.querySelector('#deleteButton');

  deleteButton.addEventListener('click', deleteButtonClicked);

  const createCountryButton = document.querySelector('#submit-country');
  createCountryButton.addEventListener('click', createButtonClicked);

  request.get(getCountriesRequestComplete);

}


const getCountriesRequestComplete = function (allCountries) {
  allCountries.forEach(function (country) {
    listView.addCountry(country);
  });
}

const deleteButtonClicked = function(evt) {
  console.log('delete button clicked');
  request.delete(deleteRequestComplete);

}

const deleteRequestComplete = function () {
    listView.clear();
}


const createButtonClicked = function(evt) {
  evt.preventDefault();
  console.log('submit button clicked')

  const countryValue = document.querySelector('#country').value;
  const landmarkValue = document.querySelector('#landmark').value;

  const body = {
    country: countryValue,
    landmark: landmarkValue
  }

  request.post(createCountryRequestComplete, body);


}

const createCountryRequestComplete = function (country) {
  listView.addCountry(country);

}

document.addEventListener('DOMContentLoaded', app);
