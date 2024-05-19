fetch("https://restcountries.com/v3.1/all")
  .then((data) => {
    return data.json();
  })
  .then((countries) => {
    updateUI(countries);
  });
const html = document.documentElement
const themeToggle = document.getElementById("themeToggle")
const themeChanger = document.getElementById('themeChanger')
if(localStorage.getItem('theme')){
  html.setAttribute('data-theme',localStorage.getItem('theme'))
}
themeToggle.addEventListener('input', () => {
  themeChanger.textContent = localStorage.getItem('theme') == 'dracula' ? 'Dark Mode' : 'Light Mode'
  html.setAttribute('data-theme',html.dataset.theme == 'winter' ? 'dracula' : 'winter')
  localStorage.setItem('theme',html.dataset.theme)
})
const ul = document.querySelector("ul");
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
    p3.setAttribute('class','lastP')
    li.append(img, h3, p1, p2, p3);
    ul.appendChild(li);
  });
}
