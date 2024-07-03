// API Connection async await 

const whether = async() => {
    let place = document.getElementById('location').value;
   console.log(place);
   localStorage.setItem('place', place)
   
   const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5fe36b192ffd1c36dffb6752bc1722b2`);
   if(data.status>=200 && data.status<=300){

       window.location.href = "./whetherdetail.html"
       
   }else {
       
       alert(`${place} is not found or Invalid place`)
       document.getElementById('location').value = '';
   }
}


// API Connection fetch method 

function loaded() {
    const place = localStorage.getItem('place')
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5fe36b192ffd1c36dffb6752bc1722b2`).then((res)=> {
        const data = res.json();
        data.then((response) => {
            console.log(response);
            const place = response.name;
            const country = response.sys.country
            const number = (response.main.temp) - 273.15;
            const celcius = Math.floor(number * 10) / 10;

            const main  = response.weather[0].main;
            const temp = (response.main.feels_like) - 273.15;
            const temperature = Math.floor(temp * 10) / 10;
            const description = response.weather[0].description;
            
            const speed = (response.wind.speed) * 3.6;
            const wind = Math.floor(speed * 10) / 10;
            const pressure = response.main.pressure;
            const humidity = response.main.humidity;
            
            const date = new Date()
            console.log(date);
            const year = date.getFullYear();

            let day = date.getDay();
            if(day < 10) day = '0' + day

            const option = {month: 'short'};
            const month = date.toLocaleDateString('en-US', option)

            const  options = {weekday : 'short' };
            console.log(options);
            const dayname = date.toLocaleDateString('en-US', options)
            
            console.log(date.toLocaleDateString());
            const hour = date.getHours()
            let weather, greet, style, shift; 
            

            if(hour >= 12 &&  hour < 15) {
                src = 'https://cdn-icons-png.flaticon.com/512/495/495976.png'
                greet = 'Good Afternoon'
                style = 'style="width: 48px;"'
                shift = 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

            }else if(hour >= 15 &&  hour < 18) {
                src = "https://cdn-icons-png.freepik.com/512/3236/3236899.png "
                greet = 'Good Evening'
                style = 'style="width: 60px;"'
                shift = 'https://images.pexels.com/photos/1456304/pexels-photo-1456304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2,,,,https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }else if(hour >= 15 &&  hour < 18) {
                src = "https://www.svgrepo.com/show/285294/moon-night.svg"
                greet = 'Good Evening'
                style = 'style="width: 45px;"'
                shift = 'https://images.pexels.com/photos/1456304/pexels-photo-1456304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2,,,,https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }else {
                src = "https://cdn-icons-png.flaticon.com/512/3892/3892988.png"
                greet = 'Good Morning'
                style = 'style="width: 60px;"'
                shift = 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              
            }



            dummy.innerHTML = `
            <div class="main-weather w-100" style ="background-image: url('${shift}')">
            <a href="./index.html" class="link d-flex justify-content-end ">
                <i class="fa-solid fa-xmark exit "></i></i>
            </a>
            

            <div class="row main-body px-5 pb-5 pt-2 w-100 mt-4">
                
                <div class="col-md-7 weather">
                    <div class="left-head d-flex justify-content-between pt-4 px-4">
                        <h5>${place}, ${country}</h5>
                        <h5>${day} ${month} ${year}, ${dayname}</h5>
                    </div>

                    <div class="left-body d-flex justify-content-center">
                        <img src="https://cdn-icons-png.freepik.com/512/6122/6122561.png" alt="" class="left-cloud me-5">
                        <h1 class="celcius">${celcius}<sup>°</sup>C</h1>
                    </div>

                    <div class="d-flex justify-content-center">
                        <h2 class="left-describe">${main}</h2>
                    </div>
                </div>
                <!-- -->
                <div class="col-md-5 weathers ">
                    <div class="d-flex flex-column align-items-center">
                        <img src='${src}' ${style} alt="" class="right-weather">
                        <h3 class=" greeting">${greet}</h3>
                        <h4 class="time fs-5" id="times"></h4>
                        <h2 class="temp"><i class="fa-solid fa-temperature-three-quarters"></i> Feels like <span class="fs-1">${temperature}<sup>°</sup>C</span></h2>
                        <h5 class="desc  ">${description}</h5>
                    </div>
                    
                    
                <div class="row">
                    <div class='col-md-1'></div>

                    <div class="col-md-3 p-4 mt-2 sg">
                        <h4 class=" d-flex fs-5 justify-content-center
                         mt-4"><i class="fa-solid fa-wind me-2"></i>Wind </h4>
                        <h4 class="d-flex justify-content-center mt-3">${wind}km/h</h4>
                    </div>
                    <div class='col-md-1'></div>

                    <div class="col-md-3 p-4 mt-2 sg">
                        <h4 class="d-flex justify-content-center mt-4 fs-5"><img src="https://i.pinimg.com/originals/a5/ae/d9/a5aed9514e1cdfe272b66d21e12a1a7b.png" alt="" class="pressure">Pressure </h4>
                        <h4 class="d-flex justify-content-center">${pressure}hap</h4>
                        </div>
                    <div class='col-md-1'></div>

                    <div class="col-md-3 p-4 mt-2 sgs"> 
                        <h4 class="d-flex justify-content-center fs-5 mt-2"><img src="https://www.svgrepo.com/show/26690/humidity.svg" alt="" class="humidity">Humidity </h4>
                        <h4 class="d-flex justify-content-center">${humidity}%</h4>
                    </div>
                    
                
                
                </div>

                </div>
            </div>

        </div>
            `
        })
    })
    function getTime() {
        // Date
        const time = new Date()
        let hour = time.getHours()
        let min = time.getMinutes()
        let sec = time.getSeconds()
        
        setTimeout(()=>{
            getTime()
        },1000)
        document.getElementById('times').innerHTML =`${hour < 10? hour = '0' + hour: hour}:${min < 10? min = '0' + min: hour}:${sec < 10? sec = '0' + sec: sec} ${hour>=12?'PM':'AM'}`
    }
    getTime()
}


