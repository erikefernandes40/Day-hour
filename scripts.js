function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('img');
    let data =  new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`;

    if(hora >= 0 && hora  < 12){
        img.src = 'assets/images/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        img.src = 'assets/images/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else if (hora >= 18 && hora <= 23){
        img.src = 'assets/images/noite.jpg'
        document.body.style.background = '#515154'

    }
}