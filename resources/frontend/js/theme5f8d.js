/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
(function(a){a.fn.prepareTransition=function(){return this.each(function(){var b=a(this);b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){b.removeClass("is-transitioning")});var c=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"];var d=0;a.each(c,function(a,c){d=parseFloat(b.css(c))||d});if(d!=0){b.addClass("is-transitioning");b[0].offsetWidth}})}})(jQuery);

/* Run function after window resize */
var afterResize=(function(){var t={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId";}if(t[uniqueId]){clearTimeout(t[uniqueId]);}t[uniqueId]=setTimeout(callback,ms);};})();


// Helper functions
function replaceUrlParam(url, paramName, paramValue) {
  var pattern = new RegExp('('+paramName+'=).*?(&|$)'),
      newUrl = url.replace(pattern,'$1' + paramValue + '$2');
  if ( newUrl == url ) {
    newUrl = newUrl + (newUrl.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
  }
  return newUrl;
}

// Timber functions
window.timber = window.timber || {};

timber.cacheSelectors = function () {
  timber.cache = {
    // General
    $html: $('html'),
    $body: $('body'),
   $changeView: $('.change-view'), 
    
       // Cart Page
    cartNoteAdd: '.cart__note-add',
    cartNote: '.cart__note',
     // Search Page       
    $searchInput: $('.search-bar__input'),
    $searchSubmit: $('.search-bar__submit'),
    
    
    
    // Product Page   
    $productImage: $('#product-featured-image')
    
  
  
  }
};

timber.init = function () {  
  timber.cacheSelectors();  
  timber.autoResponsiveElements();
  
  timber.notify();
  timber.cartPage();
  
  
  timber.search();
  
};


timber.productPage = function (options) {
  var moneyFormat = options.money_format,
      variant = options.variant,
      selector = options.selector,
      translations = options.translations;

  // Selectors
  var $productImage = $('#product-featured-image'),
      $addToCart = $('#AddToCart'),
      $productPrice = $('#ProductPrice'),
      $comparePrice = $('#ComparePrice'),
    //  $quantityElements = $('.quantity-selector, label + .js-qty, .qtyminus, .qtyplus, .product-single__quantity'),
      
      $productItem = $('.product-infor'),
      
      $productsku = $('#product-sku'),
      $addToCartText = $('#AddToCartText');            
  const progress_bars = document.querySelectorAll('.progress');
  const inventoryStatus = document.querySelectorAll('.variant-inventory');
  if (variant) {
    
     //update variant inventory    
    
    
     var inventorySpan = $productItem.find('.product-inventory span');
          if (variant.available) {
            if (variant.inventory_management !=null ) {
              inventorySpan.text(inv_qty[ variant.id ] + " " + window.in_stock );
              inventorySpan.addClass('items-count');
              inventorySpan.removeClass('many-in-stock');
              inventorySpan.removeClass('out-of-stock');
              inventorySpan.removeClass('unavailable');
              $(inventoryStatus).html( "PLEASE HURRY, ONLY " + inv_qty[ variant.id ] + " " + window.in_stock);  
              setTimeout(function(){        
                $(progress_bars).css('width', inv_qty[ variant.id ] + '%');        
              }, 1000);
            } else {
              $(inventoryStatus).html( "We have " + window.many_in_stock);
              inventorySpan.text(window.many_in_stock);
              inventorySpan.addClass('many-in-stock');
              inventorySpan.removeClass('items-count');
              inventorySpan.removeClass('out-of-stock');
              inventorySpan.removeClass('unavailable');
              $(progress_bars).css('width',  '100%');   
            }
          } else {
            $(inventoryStatus).html( "Sorry " + window.out_of_stock);
            $(progress_bars).css('width',  '0%');   
            inventorySpan.addClass('out-of-stock');
            inventorySpan.text(window.out_of_stock);
            inventorySpan.removeClass('items-count');
            inventorySpan.removeClass('many-in-stock');
            inventorySpan.removeClass('unavailable');
          }
    
     
    
    
    
    

    // Select a valid variant if available
    if (variant.available) {
      // Available, enable the submit button, change text, show quantity elements
      $addToCart.removeClass('disabled').prop('disabled', false);
      $addToCartText.html(translations.add_to_cart);
      $productsku.text(variant.sku);
     // $inventoryStatus.html(inv_qty[ variant.id ]);
      //$quantityElements.show();
    } else {
      // Sold out, disable the submit button, change text, hide quantity elements
      $addToCart.addClass('disabled').prop('disabled', true);
      $addToCartText.html(translations.sold_out);
   //   $inventoryStatus.hide();
      //$quantityElements.hide();
    }

    // Regardless of stock, update the product price
    $productPrice.html( Shopify.formatMoney(variant.price, moneyFormat) );

    // Also update and show the product's compare price if necessary
    if (variant.compare_at_price > variant.price) {
      $comparePrice
        .html(Shopify.formatMoney(variant.compare_at_price, moneyFormat))
        .show();
    } else {
      $comparePrice.hide();
    }

  } else {
    // The variant doesn't exist, disable submit button.
    // This may be an error or notice that a specific variant is not available.
    // To only show available variants, implement linked product options:
    //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
    $addToCart.addClass('disabled').prop('disabled', true);
    $addToCartText.html(translations.unavailable);
    
    $('.product-infor .product-inventory span').addClass("unavailable");
    $('.product-infor .product-inventory span').removeClass("many-in-stock");
    $('.product-infor .product-inventory span').removeClass("items-count");
    $('.product-infor .product-inventory span').removeClass("out-of-stock");
    $('.product-infor .product-inventory span').text(window.unavailable);
    
    
   
  }
  
  /*begin variant image*/
    if (variant && variant.featured_image) {
        var originalImage = jQuery("#product-featured-image");
        var newImage = variant.featured_image;
        var element = originalImage[0];
       Shopify.Image.switchImage(newImage, element, function (newImageSizedSrc, newImage, element) {
          jQuery('#ProductThumbs img').each(function() {
            var grandSize = jQuery(this).attr('src');            
            grandSize = grandSize.replace('medium','grande');                       
            if (grandSize == newImageSizedSrc) {
              jQuery(this).parent().trigger('click');              
              return false;
            }
          });
        });        
    }
    /*end of variant image */
   
                              
  
   // BEGIN SWATCHES
    if (variant) {
  var form = jQuery('#' + selector.domIdPrefix).closest('form');
  for (var i=0,length=variant.options.length; i<length; i++) {
    var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
    if (radioButton.size()) {
      radioButton.get(0).checked = true;
    }
  }
}
// END SWATCHES
  
   
  updatePricing();
   
  
};


timber.autoResponsiveElements = function () {
  var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]');
  var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

  $('table').wrap('<div class="table-wrapper"></div>');

  $iframeVideo.each(function () {
    // Add wrapper to make video responsive
    $(this).wrap('<div class="video-wrapper"></div>');
  });

  $iframeReset.each(function () {
    // Re-set the src attribute on each iframe after page load
    // for Chrome's "incorrect iFrame content on 'back'" bug.
    // https://code.google.com/p/chromium/issues/detail?id=395791
    // Need to specifically target video and admin bar
    this.src = this.src;
  });
};

timber.notify = function () {
$('#notify-me').on('click' , function() {
$('#notify-me-wrapper').fadeIn();
return false;
});
};

if(window.top.location.href.indexOf("?customer_posted=true") > -1) {
  $(".success").addClass("show");
}   



timber.cartPage = function () {
  

  timber.cache.$body.on('click', timber.cache.cartNoteAdd, function () {
    $(this).addClass('is-hidden');
    $(timber.cache.cartNote).addClass('is-active');   
  });
};
timber.drawersInit = function () {
  // Add required classes to HTML
 // $('#PageContainer').addClass('drawer-page-content');  
  $('.js-drawer-open-top').attr('aria-controls', 'SearchDrawer').attr('aria-expanded', 'false');  
  timber.SearchDrawer = new timber.Drawers('SearchDrawer', 'top', {'onDrawerOpen': timber.searchFocus});
};

timber.searchFocus = function () {
  timber.cache.$searchInput.focus();
  // set selection range hack for iOS
  timber.cache.$searchInput[0].setSelectionRange(0, timber.cache.$searchInput[0].value.length);
};

timber.searchSubmit = function () {
  timber.cache.$searchSubmit.on('click', function(evt) {
    if (timber.cache.$searchInput.val().length == 0) {
      evt.preventDefault();
      timber.cache.$searchInput.focus();
    }
  });
};


/*============================================================================
  Drawer modules
==============================================================================*/
timber.Drawers = (function () {
  var Drawer = function (id, position, options) {
    var defaults = {
      close: '.js-drawer-close',
      open: '.js-drawer-open-' + position,
      openClass: 'js-drawer-open',
      dirOpenClass: 'js-drawer-open-' + position
    };

    this.$nodes = {
      parent: $('body, html'),
      page: $('#PageContainer')
    };

    this.config = $.extend(defaults, options);
    this.position = position;

    this.$drawer = $('#' + id);

    if (!this.$drawer.length) {
      return false;
    }

    this.drawerIsOpen = false;
    this.init();
  };

  Drawer.prototype.init = function () {
    $(this.config.open).on('click', $.proxy(this.open, this));
    this.$drawer.on('click', this.config.close, $.proxy(this.close, this));
  };

  Drawer.prototype.open = function (evt) {
    
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false;

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the drawer opens, the click event bubbles up to $nodes.page
    // which closes the drawer.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
      // save the source of the click, we'll focus to this on close
      this.$activeSource = $(evt.currentTarget);
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    }

    // Add is-transitioning class to moved elements on open so drawer can have
    // transition for close animation
    this.$drawer.prepareTransition();

    this.$nodes.parent.addClass(this.config.openClass + ' ' + this.config.dirOpenClass);
    this.drawerIsOpen = true;

    // Set focus on drawer
    this.trapFocus({
      $container: this.$drawer,
      $elementToFocus: this.$drawer.find('.drawer__close-button'),
      namespace: 'drawer_focus'
    });

    // Run function when draw opens if set
    if (this.config.onDrawerOpen && typeof(this.config.onDrawerOpen) == 'function') {
      if (!externalCall) {
        this.config.onDrawerOpen();
      }
    }

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'true');
    }

    this.$nodes.parent.on('keyup.drawer', $.proxy(function (evt) {
      // close on 'esc' keypress
      if (evt.keyCode === 27) {
        this.close();
        return false;
      }
    }, this));

    // Lock scrolling on mobile
    this.$nodes.page.on('touchmove.drawer', function () {
      return false;
    });

    this.$nodes.page.on('click.drawer', $.proxy(function () {
      this.close();
      return false;
    }, this));
  };

  Drawer.prototype.close = function () {
    if (!this.drawerIsOpen) { // don't close a closed drawer
      return;
    }

    // deselect any focused form elements
    $(document.activeElement).trigger('blur');

    // Ensure closing transition is applied to moved elements, like the nav
    this.$drawer.prepareTransition();

    this.$nodes.parent.removeClass(this.config.dirOpenClass + ' ' + this.config.openClass);

    this.drawerIsOpen = false;

    // Remove focus on drawer
    this.removeTrapFocus({
      $container: this.$drawer,
      namespace: 'drawer_focus'
    });

    this.$nodes.page.off('.drawer');
    this.$nodes.parent.off('.drawer');
  };

  /**
  * Traps the focus in a particular container
  *
  * @param {object} options - Options to be used
  * @param {jQuery} options.$container - Container to trap focus within
  * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
  * @param {string} options.namespace - Namespace used for new focus event handler
  */
  Drawer.prototype.trapFocus = function (options) {
    var eventName = options.eventNamespace
      ? 'focusin.' + eventNamespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).on(eventName, function (evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  };

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  Drawer.prototype.removeTrapFocus = function (options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  };

  return Drawer;
})();

   
timber.search = function(){ 
     $('a#search_trigger').click(function(event){       
         event.stopPropagation();
          $(".search_reveal").slideToggle("500");
          $("body").toggleClass("init-search-type-two");
          return false;
     });
     $(".search_reveal").on("click", function (event) {
         event.stopPropagation();
     });
     $(".close, body").on("click", function () {
       $(".search_reveal").slideUp('500');
       $("body").removeClass("init-search-type-two");
     });
};

// Initialize Timber's JS on docready
$(timber.init);



