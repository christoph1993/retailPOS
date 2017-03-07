$(document).ready(function() {
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

  $('[data-toggle=offcanvas]').click(function() {
      console.log($('#sidebar-wrapper'));
    $('#sidebar-wrapper').toggleClass('toggled');
    $('.for-sidebar').toggleClass('toggled');
  });

  $('.search').keyup(function(){
      console.log('blarg');
		delay(function(){
			var search = $('.search').val().toLowerCase();
			$("tbody tr.filter").each(function() { if($(this).text().toLowerCase().indexOf(search) > 0 || search.length == 0) {$(this).hide(); $(this).toggle(); } else { $(this).hide() } });
		}, 750);
	});
});