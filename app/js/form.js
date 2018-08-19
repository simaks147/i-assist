$(function() {

	$(".submit-btn").click(function() {

		var $this = $(this),
			form = $this.closest('form'),
			name = form.find('input[name = "name"]').val(),
			tel = form.find('input[name = "tel"]').val(),
			to = form.find('input[name = "to"]').val(),
			type = form.find('input[name = "type"]').val(),
			city = form.find('input[name = "city"]').val(),
			txt = form.find('input[name = "txt"]').val(),
			agreement = form.find('input[name = "agreement"]');
			
			if (!name) {
				name = "";
			}

			if (!txt) {
				txt = "";
			}
		
		if (agreement.length != 0 && !agreement.is(':checked')) {
			M.toast({html: 'Подтвердите согласие!'});
			return;
		}
		$this.attr('disabled',true);


		if (tel !="") {
				
			$.ajax({
				type: "POST",
				data: "name="+name+"&tel="+tel+"&to="+to+"&type="+type+"&txt="+txt+"&city="+city,
				url: window.location.origin+'/assets/message/',
				success: function(data) {
					if (data) {
						$('#modal-submit').modal('close');
						// location.assign(window.location.origin+'/zayavka-otpravlena');
					} else {
						M.toast({html: 'Ошибка отправки!'});
						$this.attr('disabled',false);
					}
				},
				error: function() {
					M.toast({html: 'Ошибка отправки!'});
					$this.attr('disabled',false);
				}
			});

		} else {
			M.toast({html: 'Введите телефон!'});
			$this.attr('disabled',false);
		}

	});

});