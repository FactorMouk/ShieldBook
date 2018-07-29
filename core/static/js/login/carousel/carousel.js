/* Carousel for Login Page */

/* Important functions */ 
function addingScreenInitial(carouselscreenimages,carouselrepo){
    carouselscreenimages.insertBefore(carouselrepo.children[1], carouselscreenimages.firstChild);
    carouselscreenimages.insertBefore(carouselrepo.children[0], carouselscreenimages.firstChild);
    carouselscreenimages.insertBefore(carouselrepo.children[carouselrepo.children.length - 1], carouselscreenimages.firstChild);
}
function styleNone(carouselscreenimages,number){
    var element = carouselscreenimages.children[number];
    element.children[1].children[0].style.height = null; 
    element.children[1].children[0].style.width = null;
    element.style.zIndex = null;
    element.style.position = null;
    element.style.left = null;
}
function stylization(carouselscreenimages){
    /*Styling previous image*/
    var previouselement = carouselscreenimages.children[0];
    previouselement.children[1].children[0].style.height = '250px'; 
    previouselement.children[1].children[0].style.width = '350px';
    previouselement.style.zIndex = '50';
    previouselement.style.position = 'relative';
    previouselement.style.left = '200px';
    /*Styling selected image*/
    var selectedelement = carouselscreenimages.children[1];
    selectedelement.children[1].children[0].style.height = '400px'; 
    selectedelement.children[1].children[0].style.width = '500px';
    selectedelement.style.zIndex = '100';
    selectedelement.style.position = 'none';
    selectedelement.style.left = '0px';
    /*Styling posterior image*/
    var posteriorelement = carouselscreenimages.children[2];
    posteriorelement.children[1].children[0].style.height = '250px'; 
    posteriorelement.children[1].children[0].style.width = '350px';
    posteriorelement.style.zIndex = '50';
    posteriorelement.style.position = 'relative';  
    posteriorelement.style.left = '-200px'; 
    /*Styling selected title*/
    var currenttitle = document.getElementById('current-title');
    currenttitle.innerHTML = selectedelement.children[0].innerText;
}

/* Carousel fields */ 
var carouselscreen = document.getElementById('carousel-screen');
var carouselscreenimages = carouselscreen.children[1];
var carouselrepo = document.getElementById('carousel-repo');

/*Adding initials selected, previous and posterior to the carousel-screen*/
addingScreenInitial(carouselscreenimages,carouselrepo);

/*Style*/
stylization(carouselscreenimages);

/*Buttons*/
$(document).ready(function(){
    /*Left-button*/
    $("#left-arrow").click(function(){
        /*No style the previous image*/
        styleNone(carouselscreenimages,0);
        /*Add the previous image in the carouselrepo end (qeue)*/
        carouselrepo.append(carouselscreenimages.children[0]);
        /*Add in carouselscreen (posterior) the next qeue image*/
        carouselscreenimages.append(carouselrepo.children[0]);
        /*Styling the carousel screen*/
        stylization(carouselscreenimages);
    });
    /*Right-button*/
    $("#right-arrow").click(function(){
        /*No style the posterior image*/
        styleNone(carouselscreenimages,2);
        /*Add the posterior image in the carouselrepo start (qeue)*/
        carouselrepo.prepend(carouselscreenimages.children[2]);
        /*Add in carouselscreen (previous) the last qeue image*/
        carouselscreenimages.prepend(carouselrepo.children[carouselrepo.children.length-1]);
        /*Styling the carousel screen*/
        stylization(carouselscreenimages);
    });
});

