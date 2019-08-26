const InputVal = document.getElementById('cityname');
const sub_button = document.getElementById('sub-button');

sub_button.addEventListener('click', getInputValue);

var Name;

    function getInputValue(event){

        Name = InputVal.value;

        weatherBallon(Name)
    }


const key = 'c1883ba9de7d50cbb87f992c64eb209f'

function weatherBallon( cityName ){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid=" +key)
    .then(response => {
        return response.json();
    })
    .then(data => {
        weatherDraw(data);
    })
}

const textdiv = document.getElementById('weather');

function weatherDraw(data){
    textdiv.innerHTML = [data.id, data.main.temp];

}
