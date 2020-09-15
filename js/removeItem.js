			
			$(document).ready(function(){
				$('a.btn.btn-danger').click(function(){
					$(this).parentsUntil("div[class='card-deck text-center']").fadeOut('slow',function(){
						console.log('fade is over')
					}).remove()
				});
				/*$('a.btn.btn-danger').click(function(){
					$('#myModal').modal()
				});
				var button;
				$('#myModal').on('show.bs.modal', function (event) {
					console.log('Modal opened')
					button = $(event.relatedTarget) // Button that triggered the modal
					console.log(button.nodeName+" "+button.nodeClass)
				})
				$('#myModal.btn.btn-danger').click(function(){
					$(button).parentsUntil("div[class='card-deck text-center']").remove()
					//$(this).parent().parentsUntil("div[class='card-deck text-center']").remove()
				})*/
			});