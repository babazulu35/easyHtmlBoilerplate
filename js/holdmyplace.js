 /**
* Easy Place Holder For all browser Tested on IE8 
* by Hakan Hurriyet <aysanhakan@gmail.com>
*/	

/* IT WILL BE CHANGED SOON ,PLS DONT USE IT FOR A WHILE*/	

    $('[placeholder]').focus(function() {
  				var input = $(this);

  				if(input.val() == input.attr('placeholder')) {
  					input.val('');
  					input.removeClass('placeholder');
  				}
  			}).blur(function() {
  				var input = $(this);

  				if(input.val() == '' || input.val() == input.attr('placeholder')) {

  					input.addClass('placeholder');
  					input.val(input.attr('placeholder'));
  				}
  			}).blur();

  		});