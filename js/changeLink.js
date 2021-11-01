$('a').each(function(){

    var linkaddress = $(this).attr('href');
    console.log(linkaddress);
    $(this).attr('href',"https://www.google.com");


});

//update all the image address

$('img').each(function(){
var imgaddress= $(this).attr('src');
console.log(imgadd);
$(this).attr('src',"/img"+imgaddress);



});