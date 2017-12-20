const ListView = function () {
  this.countries = [];
};


ListView.prototype.addCountry = function (country) {
  this.countries.push(country);
  this.render(country);

};

ListView.prototype.clear =  function (country) {
  this.countries = [];
  const ul = document.querySelector('#countries');
  ul.innerHTML = '';
};


ListView.prototype.render = function (country) {
  const ul = document.querySelector('#countries');
  const li = document.createElement('li');
  li.innerText = `Country: ${country.country}, ` + `Landmark: ${country.landmark}`;
  ul.appendChild(li);

};



module.exports = ListView;
