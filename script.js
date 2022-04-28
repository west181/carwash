


let counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
    let limit = counter.getAttribute('date-counter')
    let count = 0;
    let time = 6000 / limit;

   let interval = setInterval(()=>{
        
    if(count <= limit){
        counter.innerHTML = count;
        count++
    }else{
        clearInterval(interval)
    }
          
    },5);
})
