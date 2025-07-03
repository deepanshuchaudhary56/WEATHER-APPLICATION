const fetchWeather = async () => {
  try {
    const res = await fetch(`http://localhost:5000/weather?city=${city}`);
    const data = await res.json();
    if (data.cod === 200) {
      setWeather(data);
    } else {
      setWeather(null);
      alert("City not found!");
    }
  } catch (err) {
    alert("Error fetching data from server.");
  }
};
