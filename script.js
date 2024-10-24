console.log('js-simon')

// vado a inserire il countdown nel layout con la funzione


//message.addEventListener('click', function(){
  //  setTimeout('click', 3000);
    //console.log(message);
//})


//const message = setInterval(function() {
  //  let distance = countDownDate - now;
//})


//setTimeout = ('genera', 300000);




//const interval = setInterval(function(){
  //  var d = new Date();
    //document.getElementById('cou').innerHTML = d;
   // }, 30000);

//document.getElementById('btn-stop').onclick = function(){

  //      clearInterval(interval);
//};

let count = 30
const intervalId = setInterval(() => {
    console.log(count)
    count--
    if (count === 0) {
        clearInterval(intervalId)
    }
},1000);




