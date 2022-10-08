//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//funcion menu 

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
        header.classList.toggle("abajo",window.scrollY>0);
})

// animaciones de las barras de habilidades

window.addEventListener('scroll',function(){
    let animacion = document.getElementById('barra-progreso1');
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight

    if(posicionobj1 < tamañodepantalla){
        animacion.style.animation = 'progreso1 4s forwards'  
    }
})

window.addEventListener('scroll',function(){
    let animacion = document.getElementById('barra-progreso2');
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight

    if(posicionobj1 < tamañodepantalla){
        animacion.style.animation = 'progreso2 4s forwards'  
    }
})

window.addEventListener('scroll',function(){
    let animacion = document.getElementById('barra-progreso3');
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight

    if(posicionobj1 < tamañodepantalla){
        animacion.style.animation = 'progreso3 4s forwards'  
    }
})

window.addEventListener('scroll',function(){
    let animacion = document.getElementById('barra-progreso4');
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight

    if(posicionobj1 < tamañodepantalla){
        animacion.style.animation = 'progreso4 4s forwards'  
    }
})

// cerrar menu cuando se seleccion algo

function selecionar(link){

    var x = document.getElementById('nav');
    x.className = "";
}

// iluminar el menu por zonas

// iluminar home
window.addEventListener('scroll',function(){
    let home = document.getElementById('inicio');
    let posicionobj1 = home.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight/3.5

    if(Math.abs(posicionobj1) < tamañodepantalla){
        let a = document.getElementById('home');
        let about = document.getElementById('about');
        let services = document.getElementById('services');
        let skills = document.getElementById('skills');
        let portfolio = document.getElementById('portfolio');
        let contact = document.getElementById('contact');
        
        a.style.color = "aquamarine";
        about.style.color = "#fff";
        services.style.color = "#fff";
        skills.style.color = "#fff";
        portfolio.style.color = "#fff";
        contact.style.color = "#fff";
    }
})

// iluminar about
window.addEventListener('scroll',function(){
    let home = document.getElementById('sobremi');
    let posicionobj1 = home.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight/3

    if(Math.abs(posicionobj1) < tamañodepantalla){
        let a = document.getElementById('home');
        let about = document.getElementById('about');
        let services = document.getElementById('services');
        let skills = document.getElementById('skills');
        let portfolio = document.getElementById('portfolio');
        let contact = document.getElementById('contact');
        
        a.style.color = "#fff";
        services.style.color = "#fff";
        about.style.color = "aquamarine";
        skills.style.color = "#fff";
        portfolio.style.color = "#fff";
        contact.style.color = "#fff";
    }
})

// iluminar services
window.addEventListener('scroll',function(){
    let home = document.getElementById('servicios');
    let posicionobj1 = home.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight/2

    if(Math.abs(posicionobj1) < tamañodepantalla){
        let a = document.getElementById('home');
        let about = document.getElementById('about');
        let services = document.getElementById('services');
        let skills = document.getElementById('skills');
        let portfolio = document.getElementById('portfolio');
        let contact = document.getElementById('contact');
        
        a.style.color = "#fff";
        services.style.color = "aquamarine";
        about.style.color = "#fff";
        skills.style.color = "#fff";
        portfolio.style.color = "#fff";
        contact.style.color = "#fff";
    }
})

// iluminar skills
window.addEventListener('scroll',function(){
    let home = document.getElementById('crack');
    let posicionobj1 = home.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight/3

    if(Math.abs(posicionobj1) < tamañodepantalla){
        let a = document.getElementById('home');
        let about = document.getElementById('about');
        let services = document.getElementById('services');
        let skills = document.getElementById('skills');
        let portfolio = document.getElementById('portfolio');
        let contact = document.getElementById('contact');
        
        a.style.color = "#fff";
        services.style.color ="#fff" ;
        about.style.color = "#fff";
        skills.style.color = "aquamarine";
        portfolio.style.color = "#fff";
        contact.style.color = "#fff";
    }
})

// iluminar portfolio
window.addEventListener('scroll',function(){
    let home = document.getElementById('portafolio');
    let posicionobj1 = home.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight/4

    if(Math.abs(posicionobj1) < tamañodepantalla){
        let a = document.getElementById('home');
        let about = document.getElementById('about');
        let services = document.getElementById('services');
        let skills = document.getElementById('skills');
        let portfolio = document.getElementById('portfolio');
        let contact = document.getElementById('contact');
        
        a.style.color = "#fff";
        services.style.color ="#fff" ;
        about.style.color = "#fff";
        skills.style.color = "#fff";
        portfolio.style.color = "aquamarine";
        contact.style.color = "#fff";
    }
})

// iluminar contact
window.addEventListener('scroll',function(){
    let home = document.getElementById('contacto');
    let posicionobj1 = home.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight/4

    if(Math.abs(posicionobj1) < tamañodepantalla){
        let a = document.getElementById('home');
        let about = document.getElementById('about');
        let services = document.getElementById('services');
        let skills = document.getElementById('skills');
        let portfolio = document.getElementById('portfolio');
        let contact = document.getElementById('contact');
        
        a.style.color = "#fff";
        services.style.color ="#fff" ;
        about.style.color = "#fff";
        skills.style.color = "#fff";
        portfolio.style.color = "#fff";
        contact.style.color = "aquamarine";
    }
})

//saber posicion

function posicion(){
    let home = document.getElementById('inicio');
    let posicion_up_home = home.getBoundingClientRect().top;
    let posicion_bot_home = home.getBoundingClientRect().bottom;
    console.log(window.scrollY>=posicion_up_home && window.scrollY<=posicion_bot_home)
    if(window.scrollY>=posicion_up_home && window.scrollY<=posicion_bot_home){
        let a = document.getElementById('home');
        a.style.color = "aquamarine";
    }
}

//selector para el formulario

const $form = document.querySelector('#forma');
const $buttonMailto = document.querySelector('#trucazo');   

$form.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href',`mailto:josemargri3@gmail.com?subject=${form.get('topic')}-${form.get('name')}-${form.get('email')}&body=${form.get('description')}`)
    $buttonMailto.click()
}
/*
window.addEventListener('scroll' ,function posicion(){
    let home = document.getElementById('inicio');
    let posicion_up_home = home.getBoundingClientRect().top;
    let posicion_bot_home = home.getBoundingClientRect().bottom;
    console.log(window.scrollY>=posicion_up_home && window.scrollY<=posicion_bot_home)

})*/

