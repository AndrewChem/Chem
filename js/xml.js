	jQuery(document).ready(function(){
		jQuery.ajax({
			type: "GET", // метод передачи данных, можно пропутсить - по умолчанию и так get
			url: "http://him-kazan.ru/app.xml", // путь к файлу, который будем читать
			dataType: "xml", // тип данных, с котрыми работаем
			success: function(xml) 
				{ // переменная названа xml. ее можно назвать как либо по другому
						/*
							в ответе приходит объект XML.
							чтобы добраться до необходимого узла, используем jQuery-поиск по DOM узлам
							например, var idItem = jQuery(xml).find("#item1").eq(1).attr("id");
						*/
							var i = 17;
							jQuery(xml).find('category').each(
								function()
								{
									
									var id = jQuery(this).attr('id'),
										cat = jQuery(this).find('title').text(),
										idr = jQuery(this).find('idr').text();
										
									jQuery('<div class="accordion"></div>').html('<h2>'+cat+'<span class="i">&nbsp;('+i+')</span></h2>').appendTo('#xml-data');
																				
										jQuery(xml).find('offer').each (
											function()
											{
											
												var id = jQuery(this).attr('id'),
													title = jQuery(this).find('name').text(),
													url = jQuery(this).find('url').text(),
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
								
								$('.'+idr+'').wrapAll('<div class="panel"></div>');		
								i = $('div.'+idr+'').length;				
								
								});											
					headInit();	
					modal();
					order();
				}
			
		});
	
	});