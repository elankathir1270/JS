/*
get current coordinates of the user
get country in which user is staying 
display the information of the country in webpage
*/

// let getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then((pos) => {
//     let { latitude: lat, longitude: lng } = pos.coords;
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data)) //https://restcountries.com/v3.1/name/{name}
//   .catch((err) => console.log(err.message));

// //Using async await

// getCountry = async function () {
//   let response = await fetch("https://restcountries.com/v3.1/name/usa");
//   let data = await response.json();
//   console.log(data);
// };

// getCountry();

/////////////////////////////////
// display user country using async and await

// let getUserCountry = async function () {
//   let position = await getPosition();

//   let { latitude: lat, longitude: lng } = position.coords;

//   let geoResponse = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   let geoData = await geoResponse.json();
//   let countryResponse = await fetch(
//     `https://restcountries.com/v3.1/name/${geoData.country}`
//   );
//   let countryData = await countryResponse.json();
//   console.log(countryData); //https://restcountries.com/v3.1/name/{name}
// };

// getUserCountry();

//Error handling with try catch

// try {
//   let x = 10;
//   const y = 20;
//   y = "hello world";
// } catch (err) {
//   console.log(err.message);
// }
// console.log("Have a good day");

// getCountry = async function () {
//   try {
//     let response = await fetch("https://restcountries.com/v3.1/name/usa");
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
//   console.log("Have a good day");
// };

// getCountry();

//Running promise in parallel

let getData = function (url, error = "Something went wrong") {
  //helper function
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`${error} ${res.status}`);
    }
    return res.json();
  });
};

let getCountryInfo = async function () {
  // let [usa] = await getData("https://restcountries.com/v3.1/name/usa");
  // let [brazil] = await getData("https://restcountries.com/v3.1/name/brazil");

  /* 
  Promise.all
  takes an array of promises
  returns an array of resolved promise data if all the promise passed to 'all' method is resolved
  returns first rejected promise data if it is failed to fetch.
  */

  let data = await Promise.all([
    getData("https://restcountries.com/v3.1/name/usa"),
    getData("https://restcountries.com/v3.1/name/brazil"),
    getData("https://restcountries.com/v3.1/name/germany"),
  ]);

  console.log(data);

  console.log(data.map((x) => x[0].name.common + " " + x[0].capital[0]));
};

getCountryInfo();

/*
Promise.race
takes an array of promises
returns the data of first settled promise(resolved/rejected). 
*/

let timeOut = function (ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error("Request took too long"));
    }, ms);
  });
};

Promise.race([
  getData("https://restcountries.com/v3.1/name/brazil"),
  timeOut(1000),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/*
Promise.allSettled
takes an array of promises
returns the data of all settled promise(resolved/rejected). 
*/

/*
Promise.any
takes an array of promises
returns the first resolved promise data. 
*/

Promise.any([
  Promise.reject("data 1"),
  Promise.reject("data 2"),
  Promise.resolve("data 3"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
