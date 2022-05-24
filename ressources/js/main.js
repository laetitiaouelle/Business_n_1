/*!
 * NaN Business
 * Copyright Not A Number and his devs

                      .
                     d8b
                   d88888b
                 d888Y Y888b
               d888Y  .  Y888b
             d888Y   d8b   Y888b
           d888Y   d88888b   Y888b
            ""   d888Y Y888b   ""
               d888Y  .  Y888b
                ""   d8b   ""
                   d88888b
   8888b   88888     Y8b     8888b   88888
    8888b   888       '       8888b   888
    88888b  888               88888b  888
    888Y88b 888    88888b.    888Y88b 888
    888 Y88b888    "   "88b   888 Y88b888
    888  Y88888   .d8888888   888  Y88888
    888   Y8888   888   888   888   Y8888
   88888   Y888   "Y88888"88 88888   Y888 
 *---------------------------------------------
 *
 * MAIN.JS
 *Page de scripts
 *
 */



$(document).ready(function(){
  /*==================================================================*/

  /* responsivité du menu -------------------------*/
  var long = $("body").width();
    $('#resp-menu').addClass('menu-navbar');
    
     if(long < 1024)
    {
      console.log(long)
      $('#resp-menu').addClass('menu-navbar');

      $(window).scroll(function(){                          
          if ($(this).scrollTop() > 500) 
          {
            $('.menu-navbar').fadeIn(500);
          } 
          else 
          {
            $('.menu-navbar').fadeOut(500);
          }
      });
    }
    else if (long > 1024) 
    {
      $('#resp-menu').removeClass('menu-navbar');
    }
   
  /* responsivité du menu, redimension de l'ecran -------------------------*/

  $(window).on('resize',function(){
    var largeur = $("body").width();
    
     if(largeur < 1024)
    {
      console.log(largeur)
      $('#resp-menu').addClass('menu-navbar');

      $(window).scroll(function(){                          
          if ($(this).scrollTop() > 500) 
          {
            $('.menu-navbar').fadeIn(500);
          } 
          else 
          {
            $('.menu-navbar').fadeOut(500);
          }
      });
    }
    else if (largeur > 1024) 
    {
      $('#resp-menu').removeClass('menu-navbar');
    }
  });

  /* responsivité du menu, montrer les liens du menu -------------------------*/

  $("#open").click(function(){
    $(".main-nav").slideToggle();

    var icon = $('.hamburger');

    if(icon.hasClass('in')){
      icon.attr('name','close-circle-outline');
      
      icon.addClass('out');
      icon.removeClass('in');
    }
    else
    {
      icon.addClass('in');
      icon.removeClass('out');
      icon.attr('name', 'menu');
    }
  });


 /*==================================================================*/
});
/*====================code js de la page check=======================*/
    // ACCORDEON 

$('#icon1').on('click', function() {
  toggleAccordeon1();
 });
 $('#icon2').on('click', function() {
  toggleAccordeon2();
 });
 $('#icon3').on('click', function() {
  toggleAccordeon3();
 });
 
 function toggleAccordeon1() {
  if ($('#panel1').hasClass('show')) {
   $('#panel1')
    .removeClass('show')
    .find('#toggle1')
    .slideUp();
  } else {
   $('#panel1')
    .addClass('show')
    .find('#toggle1')
    .slideDown();
  }
  
 }
 function toggleAccordeon2() {
  
  if ($('#panel2').hasClass('show')) {
   $('#panel2')
    .removeClass('show')
    .find('#toggle2')
    .slideUp();
  } else {
   $('#panel2')
    .addClass('show')
    .find('#toggle2')
    .slideDown();
  }
  
 }
 function toggleAccordeon3() {
  if ($('#panel3').hasClass('show')) {
   $('#panel3')
    .removeClass('show')
    .find('#toggle3')
    .slideUp();
  } else {
   $('#panel3')
    .addClass('show')
    .find('#toggle3')
    .slideDown();
  }
 }
 //raccorcissement du nombre
 function RedNum(x) {
   if(isNaN(x)) return x;
 
   if(x < 9999) {
     return x;
   }
 
   if(x < 1000000) {
     return Math.round(x/1000) + "K";
   }
   if( x < 10000000) {
     return (x/1000000).toFixed(2) + "M";
   }
 
   if(x < 1000000000) {
     return Math.round((x/1000000)) + "M";
   }
 
   if(x < 1000000000000) {
     return Math.round((x/1000000000)) + "B";
   }
 
   //return "1T+";
 }
 
 
 //declaration de variable
 
 let prixMin = new Array();
 let prixMax = new Array();
 
 prixMin['wbvitrine']=500000;
 prixMax['wbvitrine']=1000000;
 
 prixMin['wbportail']= 1000000;
 prixMax['wbportail']= 2000000;
 
 prixMin['wbecommerce']=2000000;
 prixMax['wbecommerce']=5000000;
 
 prixMin['android']=1000000;
 prixMax['android']=5000000;
 
 prixMin['ios']=3000000;
 prixMax['ios']=5000000;
 
 prixMin['cross']=3000000;
 prixMax['cross']=5000000;
 
 let aff = document.getElementById('totalsum');
 let add = document.getElementById('add');
 let rmv = document.getElementById('remove');
 
 
 //let count=0;
 let Total;
 let i;
 let itemCheckedNumber;
 
 aff.innerHTML="Choississez une offre";
 add.classList.add('hiden');
 rmv.classList.add('hiden');
 
 
 
 //manipulation des données du formulaire
 
 function myFunction(){
 
   function prixVitrine()
   {  
       var PriceMin1=0;
       var PriceMax1=0;
       var item1=0;
       var form = document.forms["commande"];
       var selected = form.elements["wbvitrine"];
           //if the checkbox button is checked
           if(selected.checked)
           {
               PriceMin1 = prixMin['wbvitrine'];
               PriceMax1 = prixMax['wbvitrine'];
               item1=1;
               //alert(Price);
               
           }
       //We return the price
       return [PriceMin1, PriceMax1, item1];
   }
   function prixPortail()
   {  
       var PriceMin2=0;
       var PriceMax2=0;
       var item2=0;
       var form = document.forms["commande"];
       var selected = form.elements["wbportail"];
           //if the checkbox button is checked
           if(selected.checked)
           {
               PriceMin2 = prixMin['wbportail'];
               PriceMax2 = prixMax['wbportail'];
               item2=1;
               //alert(Price);
               
           }
       //We return the price
       return [PriceMin2,PriceMax2, item2];
   }
 
   function prixEcom()
   {  
       var PriceMin3=0;
       var PriceMax3=0;
       var item3 =0;
       var form = document.forms["commande"];
       var selected = form.elements["wbecommerce"];
           //if the checkbox button is checked
           if(selected.checked)
           {
               PriceMin3 = prixMin['wbecommerce'];
               PriceMax3 = prixMax['wbecommerce'];
               item3=1;
               //alert(Price);
               
           }
       //We return the price
       return [PriceMin3, PriceMax3, item3];
   }
 
   function prixAndroid()
   {  
       var PriceMin4=0;
       var PriceMax4=0;
       var item4=0;
       var form = document.forms["commande"];
       var selected = form.elements["android"];
           //if the checkbox button is checked
           if(selected.checked)
           {
               PriceMin4 = prixMin['android'];
               PriceMax4 = prixMax['android'];
               item4=1;
               //alert(Price);
               
           }
       //We return the price
       return [PriceMin4, PriceMax4, item4];
   }
   function prixIos()
   {  
       var PriceMin5=0;
       var PriceMax5=0;
       var item5=0;
       var form = document.forms["commande"];
       var selected = form.elements["ios"];
           //if the checkbox button is checked
           if(selected.checked)
           {
               PriceMin5 = prixMin['ios'];
               PriceMax5 = prixMax['ios'];
               item5=1;
               //alert(Price);
               
           }
       //We return the price
       return [PriceMin5, PriceMax5, item5];
   }
 
   function prixCross()
   {  
       var PriceMin6=0;
       var PriceMax6=0;
       var item6=0;
       var form = document.forms["commande"];
       var selected = form.elements["cross"];
           //if the checkbox button is checked
           if(selected.checked)
           {
               PriceMin6 = prixMin['cross'];
               PriceMax6 = prixMax['cross'];
               item6=1;
               //alert(Price);
               
           }
       //We return the price
       return [PriceMin6, PriceMax6, item6];
   }
  
   function Total()
   {
     var pricesVitrine = new prixVitrine();
     var prixVmin= pricesVitrine[0];
     var prixVmax= pricesVitrine[1];
 
     var pricesPortail = new prixPortail();
     var prixPmin= pricesPortail[0];
     var prixPmax= pricesPortail[1];
 
     var pricesEcom = new prixEcom();
     var prixEmin= pricesEcom[0];
     var prixEmax= pricesEcom[1];
 
     var pricesAndroid = new prixAndroid();
     var prixAmin= pricesAndroid[0];
     var prixAmax= pricesAndroid[1];
 
     var pricesIos = new prixIos();
     var prixImin= pricesIos[0];
     var prixImax= pricesIos[1];
 
     var pricesCross = new prixCross();
     var prixCmin= pricesCross[0];
     var prixCmax= pricesCross[1];
     var reduce;
     var itemChecked =pricesVitrine[2]+pricesPortail[2]+pricesEcom[2]+pricesAndroid[2]+pricesIos[2]+pricesCross[2];
     var totalMin = prixVmin + prixPmin + prixEmin + prixAmin + prixImin + prixCmin;
     var totalMax = prixVmax + prixPmax + prixEmax + prixAmax + prixImax + prixCmax ;
     function display (y){
       totalMin = totalMin-(y*totalMin) /100;
       totalMax = totalMax-(y*totalMax) /100;
       aff.innerHTML= RedNum(totalMin)+ " / "+ RedNum(totalMax);
  }
 
 
       switch (itemChecked) {
         case null:
           itemCheckedNumber=0;
           aff.innerHTML="Choississez une offre";
           add.classList.add('hiden');
           rmv.classList.add('hiden');
         case 1:
           itemCheckedNumber=1; 
           reduce=0
             display(0);
             //aff.innerHTML=itemChecked;
             add.classList.remove('hiden');
             rmv.classList.remove('hiden');
           break;
 
         case 2:
           itemCheckedNumber=2; 
           //aff.innerHTML=itemChecked;
           add.classList.remove('hiden');
             rmv.classList.remove('hiden');
             display(2);  
           break;
         
           case 3:
             itemCheckedNumber=3;
             //aff.innerHTML=itemChecked;
             add.classList.remove('hiden');
             rmv.classList.remove('hiden');
               display(3);   
             break;
           case 4:
             itemCheckedNumber=4;
             add.classList.remove('hiden');
             rmv.classList.remove('hiden');
             //aff.innerHTML=itemChecked;
              display(4.5); 
             break;
           case 5:
             itemCheckedNumber=5;
             add.classList.remove('hiden');
             rmv.classList.remove('hiden');
               //aff.innerHTML=itemChecked;
               display(5);
             break;
           case 6:
             itemCheckedNumber=6;
               display(6);
               //aff.innerHTML=itemChecked;
               add.classList.remove('hiden');
               rmv.classList.remove('hiden');
             break;
           case 7:
             itemCheckedNumber=7;   
             break;
         default:
           aff.innerHTML="choissisez une offre";
           add.classList.add('hiden');
           rmv.classList.add('hiden');
           break;
       }
    
   }
 
   Total();
  }
 
 //bouton de soumission
 $(function() {
   var btn = $(".btn");
   
   btn.on("click", function() {
     
     $(this).addClass('btn-progress');
     setTimeout(function() {
       btn.addClass('btn-fill')
     }, 500);
     
     setTimeout(function() {
       btn.removeClass('btn-fill')
     }, 4100);
     
     setTimeout(function() {
       btn.addClass('btn-complete')
     }, 4100);
   
   });
 })
/*====================code js de la page check=======================*/
