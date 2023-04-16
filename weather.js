const Config = {
  key: "0afc41116086771ceea4c08d88916501", // Free Account
  baseURL: "https://api.openweathermap.org/data/2.5/", 
};

const getCurrentPosition = async () => {
  if (!navigator.geolocation) return false;
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return {
    lon: pos.coords.longitude,
    lat: pos.coords.latitude,
  };
};

const toQueryString = obj => {
  var parts = [];
  for (var item in obj) {
    if (obj.hasOwnProperty(item)) {
      parts.push(
        encodeURIComponent(item) + "=" + encodeURIComponent(obj[item])
      );
    }
  }
  return parts.join("&");
};

const getCurrentWeather = async geo => {
  const query = toQueryString(geo);
  const res = await fetch(
    Config.baseURL + `weather?appid=${Config.key}&${query}&lang=zh_tw&units=metric`,
    {
      method: "GET",
      cache: "reload",
    }
  );
  return res.json();
};

const getForecastWeather = async geo => {
    const query = toQueryString(geo);
  const res = await fetch(
    Config.baseURL + `forecast?appid=${Config.key}&${query}&lang=zh_tw&units=metric`,
    {
      method: "GET",
      cache: "reload",
    }
  );
  return res.json();
}

export default {
  Config,
  getCurrentPosition,
  toQueryString,
  getCurrentWeather,
  getForecastWeather,
};
