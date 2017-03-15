jQuery(document).ready(function($) {
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
    $('.for-sidebar-table').toggleClass('toggled');
  });

  $('.search').keyup(function(){
      console.log('blarg');
		delay(function(){
			var search = $('.search').val().toLowerCase();
			$("tbody tr.filter").each(function() { if($(this).text().toLowerCase().indexOf(search) > 0 || search.length == 0) {$(this).hide(); $(this).toggle(); } else { $(this).hide() } });
		}, 750);
	});

    $('.add-sale').click(function(){
        var item = $('.add-sale-text')[0].value;
        $.post("sales/get-product", {"item" : item} ,function(data, status){
            if(data.length > 0){
                var html = '<tr>\
                            <td>'+data[0].productCode + '</td>\
                            <td class="sale-remove">'+data[0].productType+'</td>\
                            <td class="sale-remove">'+data[0].productStyle+'</td>\
                            <td class="sale-remove">'+data[0].productGender+'</td>\
                            <td class="sale-remove">'+data[0].productSize+'</td>\
                            <td>'+data[0].productCost+'</td></tr>';
                $('.for-sidebar-table > tbody:last-child').append(html);
                $('.for-sidebar-table').show();
                $('.clear-sale').show();
            } else {
                alert("No products found");
            }
        });
    });

    $('.clear-sale').click(function(){

    });

});