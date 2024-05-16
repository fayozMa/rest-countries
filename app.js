fetch("https://restcountries.com/v3.1/all")
  .then((data) => {
    return data.json();
  })
  .then((countries) => {
    updateUI(countries);
  });
const themeBtn = document.querySelector("label")
const ul = document.querySelector("ul");
const checkbox = document.querySelector('.theme-controller');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-mode');
    document.getElementById('themeChanger').textContent = 'Light Mode';
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById('themeChanger').textContent = 'Dark Mode';
  }
});
function updateUI(countries) {
  countries.forEach((country) => {
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const li = document.createElement("li");
    img.src = country.flags.png;
    h3.textContent = country.name.common;
    p1.innerHTML = `<span>Population:</span>${country.population}`;
    p2.innerHTML = `<span>Region:</span>${country.region}`;
    p3.innerHTML = `<span>Capital:</span>${country.capital}`;
    li.append(img, h3, p1, p2, p3);
    ul.appendChild(li);
  });
}
