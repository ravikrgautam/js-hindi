document.querySelector('#images').addEventListener('click', function(e){
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.parentNode);
    
    let removeIt = e.target.parentNode;
    removeIt.remove();
})