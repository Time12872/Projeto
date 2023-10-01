var marcynPedidos = {
	init: function() {
		marcynPedidos.slideProd();
	},
	slideProd: function() {
		$('.tagControl').click(function() {
			if ($(this).next(".col-md-12").find('.pedido').is(":hidden ")) {
				$(this).next(".col-md-12").find('.pedido').slideDown("fast");
				$(this).html('<i class="fa fa-minus" aria-hidden="true"></i>');
			} else {
				$(this).next(".col-md-12").find('.pedido').slideUp("fast");
				$(this).html('<i class="fa fa-plus" aria-hidden="true"></i>');
			}
		});
	}
}
$(function() {
	marcynPedidos.init();
})