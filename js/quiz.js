//event click
function changestyle(e){
//this------> represent the element
// e ---> event triggered
e.preventDefault();
// if the class is answer, change to answer selected 
//else change back to answer 
var currentclass = this.getAttribute('class');
if(currentclass =="answer"){
    this.setAttribute('class',"answer selected");
    } else(currentclass=="answer"); {

    }
        
    
this.setAttribute('class',"answer selected");
this.children[0].children[0].checked=true;
var staterotation="rotate(360deg)";
this.animate([{transform: 'rotate(0deg)'},{transform:'rotate(180deg)'}],{duration:3000,fill:"forwards"});


}





//change the style of the checkbox when clicking
var elist = document.getElementsByClassName('answer');
for(var i=0; i<elist.length; i++){
    elist[i].addEventListener('click', changestyle);

}