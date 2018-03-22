	$(document).ready(function(){
		$.ajax({
			type: "GET", 
			url: "http://him-kazan.ru/app.xml", 
			dataType: "xml", 
			success: function(xml) 
				{ 
					var i = 0;
					$(xml).find('category').each(
						function()
						{
							var //id = jQuery(this).attr('id'),
								cat = jQuery(this).find('title').text(),
								idr = jQuery(this).find('idr').text();
								
								$(this).find('offer').each (
									function()
									{i++;}
									)
								
								$('<div class="accordion"></div>').html('<h2>'+cat+'<span class="i">&nbsp;('+i+')</span></h2>').appendTo('#xml-data');
										
								$(this).find('offer').each (
									function()
									{
										var //id = jQuery(this).attr('id'),
											title = jQuery(this).find('name').text(),
											//url = jQuery(this).find('url').text(),
											desc = jQuery(this).find('description').text(),
											price = jQuery(this).find('price').text(),
											cur = jQuery(this).find('cur').text(),
											pack = jQuery(this).find('pack').text(),
											pict = jQuery(this).find('picture').text(),
											categoryId = jQuery(this).find('categoryId').text();
											
											if (categoryId == idr) {
												jQuery('<div class="'+idr+'"></div>').html('<h3>'+title+'</h3><img src="'+pict+'"><button class="open-modal-btn" value="'+title+'">Заказать</button><p>Цена: <b>'+price+' '+cur+'</b></p><p>Фасовка: <b>'+pack+'</b></p><p>'+desc+'</p><hr>').appendTo('#xml-data');
											}
									});	
									
								i = 0;
								$('.'+idr+'').wrapAll('<div class="panel"></div>');	
								$('.'+idr+'').attr('class','tovar');			

						});											
						
					headInit();	
					modal();
					order();
					
				}
			
		});
	
	});