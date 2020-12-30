(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["header-model-4"]) return;
  try {
    

if (jQuery.cookie('headerTop') == 'closed') {
jQuery('.header-top').fadeOut();
}

jQuery('.header-top a.close').bind('click',function(){
jQuery('.header-top').fadeOut();
jQuery.cookie('headerTop', 'closed', {expires:-1, path:'/'});
});  



  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["header-model-9"]) return;
  try {
    

if (jQuery.cookie('headerTop') == 'closed') {
jQuery('.header-top').fadeOut();
}

jQuery('.header-top a.close').bind('click',function(){
jQuery('.header-top').fadeOut();
jQuery.cookie('headerTop', 'closed', {expires:-1, path:'/'});
});  

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-faq-model"] && !window.DesignMode) return;
  try {
    
$(document).ready(function(){
$('#homeFaqmodel').slick({       
dots:true,
slidesToShow: 1,
slidesToScroll: 1, 
autoplay:true,
autoplaySpeed:1000,
arrows: false
});
});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-gallery-block1"] && !window.DesignMode) return;
  try {
    

$("area[rel^='prettyPhoto']").prettyPhoto();
$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,social_tools: false,counter_separator_label: false});
$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["home-gallery-block2"] && !window.DesignMode) return;
  try {
    

$("area[rel^='prettyPhoto']").prettyPhoto();
$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,social_tools: false,counter_separator_label: false});
$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["product-sidebar-promoimage"]) return;
  try {
    
$(document).ready(function(){
     $("#promo-carousel").owlCarousel({ 
      autoPlay: 3000, //Set AutoPlay to 3 seconds 
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false,
        pagination:true
 
  });
});
      

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["sidebar-category"]) return;
  try {
    
$(document).ready(function(){
$(".dt-menu-expand").click(function(event){
event.preventDefault();
if( $(this).hasClass("dt-mean-clicked") ){
$(this).html('<i class="fas fa-plus"></i>');
if( $(this).prev('ul').length ) {
$(this).prev('ul').slideUp(400);
} else {
$(this).prev('.megamenu-child-container').find('ul:first').slideUp(600);
}
} else {
$(this).html('<i class="fas fa-minus"></i>');
if( $(this).prev('ul').length ) {
$(this).prev('ul').slideDown(400);
} else{
$(this).prev('.megamenu-child-container').find('ul:first').slideDown(2000);
}
}

$(this).toggleClass("dt-mean-clicked");
return false;
});

});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["top-bar-type-2"]) return;
  try {
    

if (jQuery.cookie('headerTop') == 'closed') {
jQuery('.header-top').fadeOut();
}

jQuery('.header-top a.close').bind('click',function(){
jQuery('.header-top').fadeOut();
jQuery.cookie('headerTop', 'closed', {expires:-1, path:'/'});
});  

  } catch(e) { console.error(e); }
})();

})();
