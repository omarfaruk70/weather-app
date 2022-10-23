const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', loadData);
function loadData(){
    let userLocation = document.getElementById('userinput').value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=+${userLocation}&appid=677b101593ec3a5faadfcb27a5c2a45c`)
    .then(res => res.json())
    .then(data => {
        const currentLocation = data.name;
        let tempareture = data.main.temp;
        const currentTemp = tempareture - 273.15;
        const currentCondition = data.weather[0].description;        

        const location = document.getElementById('location');
        location.innerHTML = currentLocation;
        const todaystemp = document.getElementById('temp');
        todaystemp.innerText = currentTemp.toFixed(2);
        const condition = document.getElementById('presentCondition');
        condition.innerHTML = currentCondition;
        })
    .catch(rs=>{
        location = '';
        todaystemp = '';
        condition = '';
        alert('Please Enter your valid city or check your spelling')
    })    
};