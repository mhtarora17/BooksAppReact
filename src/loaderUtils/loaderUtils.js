export function startLoader() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
}

export function stopLoader() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
}

export function ifErrorScrollTo(){
    setTimeout(function(){
        if(document.getElementsByClassName('error').length > 0) document.getElementsByClassName('error')[0].focus();
        console.log(document.getElementsByClassName('error'));
    }, 100);
    
}