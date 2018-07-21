/* Carousel for Login Page */

/* Important vars */ 
var selected = 0;
var previous = null;
var posterior = null;

/* Important functions */ 
function addingScreen(carouselscreen,carouselfields){
    carouselscreen.insertBefore(carouselfields[previous], carouselscreen.firstChild);
    carouselscreen.insertBefore(carouselfields[selected], carouselscreen.firstChild);
    carouselscreen.insertBefore(carouselfields[posterior], carouselscreen.firstChild);
}

function definePreviousAndPosterior(carouselfields){ 
    if(selected == 0 && carouselfields.length == 2){
        previous = null;
        posterior = selected + 1;
    }else if(selected == 1 && carouselfields.length == 2){
        previous = selected - 1;
        posterior = null;
    }else if(selected == 0 && carouselfields.length > 1){
        previous = carouselfields.length - 1;
        posterior = selected + 1;
    }else if(selected == (carouselfields.length - 1) && carouselfields.length > 1){
        previous = selected - 1;
        posterior = 0;
    }else if(previous!=null && posterior!=null){
        previous = selected - 1;
        posterior = selected + 1;
    }
}
function stylization(carouselscreen){
    /*Styling previous image*/
    var previouselement = carouselscreen.children[0];
    previouselement.children[1].children[0].style.height = '250px'; 
    previouselement.children[1].children[0].style.width = '350px';
    previouselement.style.zIndex = '50';
    previouselement.style.position = 'relative';
    previouselement.style.left = '200px';
    /*Styling selected image*/
    var selectedelement = carouselscreen.children[1];
    selectedelement.children[1].children[0].style.height = '400px'; 
    selectedelement.children[1].children[0].style.width = '500px';
    selectedelement.style.zIndex = '100';
    /*Styling posterior image*/
    var posteriorelement = carouselscreen.children[2];
    posteriorelement.children[1].children[0].style.height = '250px'; 
    posteriorelement.children[1].children[0].style.width = '350px';
    posteriorelement.style.zIndex = '50';
    posteriorelement.style.position = 'relative';
    posteriorelement.style.right = '200px';   
    /*Styling selected title*/
    var currenttitle = document.getElementById('current-title');
    currenttitle.innerHTML = selectedelement.children[0].innerText;
}

/* Carousel fields */ 
var carouselscreen = document.getElementById('carousel-screen');
var carouselrepo = document.getElementById('carousel-repo');
var carouselfields = new Array();
for(element of carouselrepo.children) {
    carouselfields.push(element);
}

/*Defining previous and posterior*/
definePreviousAndPosterior(carouselfields);

/*Adding selected, previous and posterior to the carousel-screen*/
addingScreen(carouselscreen,carouselfields);

/*Style*/
stylization(carouselscreen);