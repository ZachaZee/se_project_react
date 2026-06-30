export const getWeather = ({ latitude, longitude }, APIkey) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;
  
  return processRequest(url); 
};


function processRequest(url) {
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    });
}