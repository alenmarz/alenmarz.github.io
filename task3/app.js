var guid = function(){
    var s4 = function(){
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);}
			return s4() + s4() + s4() + s4() + s4() + s4() +
			s4() + s4();}

			var add_li = function(task_text) {
			var li_id = guid();
			$('#mainul').append('<li id="' + li_id + '">' +
					    '<span>' + task_text +
					    '</span>' +
					    '<input type="button" value="Удалить" onclick="$(\'#'
					    + li_id + '\').remove()">' +
					    '</li>')
			}

			$(document).ready(function() {
					  $('#root').
					  append('<ul id="mainul"></ul>' +
						 '<hr>' +
						 '<input id="add_task_input">'
						 +
						 '<input type="button" id="add_task" value="Добавить" onclick="add_li($(\'#add_task_input\').val())">');
					  add_li
					  ("Сделать задание #3 по  web-программированию");}
			)
