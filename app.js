const container = document.querySelector('.container');
const search = document.querySelector('.search-box');
const weatherbox = document.querySelector('.weather-box');
const weatherdetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');


search.addEventListener('click', ()=>{
    const APIKey = 'b7acdf55c78aa83aa5e3688838080ef6';
    const city =document.querySelector('.search-box input').value;

    if (city == '')
       return;

    //for running file ,please uncomment the below block of code.

    /* fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    ).then(Response => Response.json()).then(json =>{

        if(json.cod == '404'){
            cityHide.textContent = city;
            container.style.height = '450px';
            weatherbox.classList.remove('active');
            weatherdetails.classList.remove('active');
            error404.classList.add('active');
            return;
        } */

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');
        
        if (cityHide.textContent == city) {
            return;
        }
        else{
            cityHide.textContent = city;
            
            container.style.height = '555px';
            container.classList.add('active');
            weatherbox.classList.add('active');
            weatherdetails.classList.add('active');
            error404.classList.remove('active');

            setTimeout(() => {
                container.classList.remove('active');
            }, 2500);

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '/images/clear.png';
                    break;
                
                case 'Rain':
                    image.src = '/images/rain.png';
                    break;
    
                case 'Snow':
                    image.src = '/images/snow.png';
                    break;
    
                case 'Clouds':
                    image.src = '/images/cloud.png';
                    break;
    
                case 'Mist':
                    image.src = '/images/mist.png';
                    break;
                
                case 'Haze':
                    image.src = '/images/mist.png';
                    break;
                
                default:
                    image.src = '/images/cloud.png'
                    break;
            }
    
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            const infoweather = document.querySelector('.info-weather');
            const infohumidity = document.querySelector('.info-humidity');
            const infowind = document.querySelector('.info-wind');

            const elcloneinfoweather = infoweather.cloneNode(true);
            const elcloneinfohumidity = infohumidity.cloneNode(true);
            const elcloneinfowind = infowind.cloneNode(true);

            elcloneinfoweather.id = 'clone-info-weather';
            elcloneinfoweather.classList.add('active-clone');

            elcloneinfohumidity.id = 'clone-info-humidity';
            elcloneinfohumidity.classList.add('active-clone');

            elcloneinfowind.id = 'clone-info-wind';
            elcloneinfowind.classList.add('active-clone');

            setTimeout(() => {
                infoweather.insertAdjacentElement("afterend",elcloneinfoweather);
                infohumidity.insertAdjacentElement("afterend",elcloneinfohumidity);
                infowind.insertAdjacentElement("afterend",elcloneinfowind);
            }, 2200);

            const cloneinfoweather =document.querySelectorAll('.info-weather.active-clone');
            const totalcloneinfoweather = cloneinfoweather.length;
            const cloneinfoweatherfirst = cloneinfoweather[0];

            const cloneinfohumidity =document.querySelectorAll('.info-humidity.active-clone');
            const cloneinfohumidityfirst = cloneinfohumidity[0];

            const cloneinfowind =document.querySelectorAll('.info-wind.active-clone');
            const cloneinfowindfirst = cloneinfowind[0];

            if (totalcloneinfoweather > 0) {
                cloneinfoweatherfirst.classList.remove('active-clone');
                cloneinfohumidityfirst.classList.remove('active-clone');
                cloneinfowindfirst.classList.remove('active-clone'); 
                
                setTimeout(() => {
                    cloneinfoweatherfirst.remove();
                    cloneinfohumidityfirst.remove();
                    cloneinfowindfirst.remove();
                }, 2200);
            }

        }
    });
});
