import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import OpenWeather from './weather.js'

createApp({
    data() {
      return {
        geolocation: {},
        weather: {
            current:0,
            forecast:0,
        },
      }
    },
    computed:{},
    methods:{
        async displayWeather(){
            this.geolocation = await OpenWeather.getCurrentPosition();
            this.weather.current = await OpenWeather.getCurrentWeather(this.geolocation);
            this.weather.forecast = await OpenWeather.getForecastWeather(this.geolocation);
        },
        getIconPath(icon){
            return `https://openweathermap.org/img/wn/${icon}@2x.png`
        }
    },
    created(){
        this.displayWeather()
        console.log(this.weather)
    },
  }).mount('#app')