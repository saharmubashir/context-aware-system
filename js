function btnn(){
var namecity=document.querySelector('#cityName').value;
console.log(namecity);

var temp=document.querySelector('.temp');
var desc=document.querySelector('.desc');
var city=document.querySelector('.city');
var feels=document.querySelector('.feels');
// alert("heyyyy");


// var api=`api.openweathermap.org/data/2.5/weather?q={london}& appid=762578e4b2fd52db9196d8076dd3203f`;
fetch('http://api.openweathermap.org/data/2.5/weather?q='+namecity+'&appid=762578e4b2fd52db9196d8076dd3203f')
  .then((Response)=>{
      return Response.json();
  })
  .then(data =>{
      console.log(data);
      var nameValue=data['name'];
      var description=data['weather'][0]['description'];
      var temperature=data['main']['temp'];
      var feel=data['main']['feels_like'];
    //   console.log(nameValue+description+temperature);
    city.innerHTML='Name: '+nameValue;
    desc.innerHTML='Description: '+description;
    feels.innerHTML='Feels Like: '+feel+'F';
    temp.innerHTML='Temperature: '+temperature+'F';
  })
}
