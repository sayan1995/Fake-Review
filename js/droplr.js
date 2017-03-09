registered=0;
selectedItems=0;
function droplr(category)
{
	var i=0,list=[];
	var k=this.load;
	var _this=this;
	jQuery.get('../search/'+category+'.txt').done(function(data) {
		p1=[];
		p1=data.split('\n');
		for(i=0;i<p1.length;i++)
		{
			list.push({'url':'../images/comp.jpg','name':p1[i]});
		}
		_this.data = list;
		//console.log(_this.data[0].length);
		_this.len = _this.data.length;
		k(list);
	});



	/*u='[\
				{"url":"../images/alone.jpg","name":"Alone.jpg"},\
				{"url":"../images/cat.jpg","name":"Cat.jpg"},\
				{"url":"../images/fire.jpg","name":"Fire.jpg"},\
				{"url":"../images/Fotolia.jpg","name":"Fotolia.jpg"},\
				{"url":"../images/Free.jpg","name":"Free.jpg"},\
				{"url":"../images/leaf.jpg","name":"Leaf.jpg"},\
				{"url":"../images/love.jpg","name":"Love.jpg"},\
				{"url":"../images/web.jpg","name":"Web.jpg"},\
				{"url":"../images/doggie.jpg","name":"doggie.jpg"},\
				{"url":"../images/comp.jpg","name":"comp.jpg"}\
			]';*/
			//console.log(u);

}
droplr.prototype.load =function (list1) {
	//format of data-JSON
	//[filelist:[url:,name,time]]
	//time would usually consist of a timestap in GMT and we would need to convert this to the difference between current time
	//and end that time stamp(eg 3 hrs ago),but due to lack of time on my end I have just added this difference in time to the array
	data = list1;
		$('.display-area').text('');
	console.log(data);
	var i = 0;

var fillcards = setInterval(function () {

	var length = data.length-1;
	var p = $('<div/>').attr('class', 'col-md-15');
	$(p).addClass('col-lg-15');
	$(p).addClass('col-sm-15');
	$(p).addClass('col-xs-15');

	var card = ['<div id = "card-' + i+1 + '">\
				<img class="image-url block-inline" src="' + data[i].url + '">\
				<div class="break"></div>\
				<div class="image-name">' + data[i].name + '</div>\
				</div>'];
	//alert(card);
	i++;
	$(p).append(card);
	$('.display-area').append(p);
if (i == length) {
	clearInterval(fillcards);
}

},150);

// 	for (i = 0; i < data.length-1; i++) {
// 		try {
// 	  p = $('<div/>').attr('class', 'col-md-15');
// 		$(p).addClass('col-lg-15');
// 		$(p).addClass('col-sm-15');
// 		$(p).addClass('col-xs-15');
// 		console.log(p);
// 		//debugger;
// 		var card = ['<div id = "card-' + i+1 + '">\
// 					<img class="image-url block-inline" src="' + data[i].url + '">\
// 					<div class="break"></div>\
// 					<div class="image-name">' + data[i].name + '</div>\
// 					</div>'];
// 		//alert(card);
// 		$(p).append(card);
// 		waitTime().then(function(){
// 			$('.display-area').append(p);
// 			$(p).fadeIn('slow');
// 		}).fail(function(){
// 			$('.display-area').append(p);
// 			$(p).fadeIn('slow');
// 		});
// 		$('.display-area').append(p);
// 		$(p).fadeIn('slow');
//
//
//
// 		//this.generate(data[i].url, data[i].name, p, i + 1);
//
// 		}
// 		catch(err)
// 		{}
// 	}
// }
}
function waitTime  () {
	var  defer = $.Deferred();
  //debugger;
	setTimeout(function(){
		console.log('in resolve');
		defer.resolve();
	},1000);
	return defer.promise();
}

droplr.prototype.generate =function (url, name, div, i) {

	var card = ['<div id = "card-' + i + '"><a href="./rfid.html">\
				<center><img class="image-url block-inline" src="' + url + '"></center>\
				<div class="break"></div>\
				<b class="image-name">' + name + '</b>\
				</a></div>'];
	$(p).append(card);

}

function init(category="Automotive")
{
	new droplr(category);
	if(registered==0)
	registerEvents();
	registered++;
}
function registerEvents()
{
	$(document).on('click', '.automotives', function() {
		if (!$(this).hasClass('clicked')) {
			$( ".options" ).removeClass('selected');
			$('.auto').addClass('selected');
			init('Automotive');
		};
	});

	$(document).on('click', '.clothes', function() {
		if (!$(this).hasClass('clicked')) {
			$( ".options" ).removeClass('selected');
			$('.clo').addClass('selected');
			init('Clothes')
		}
	});

	$(document).on('click', '.cellphones', function() {
		if (!$(this).hasClass('clicked')) {
			$( ".options" ).removeClass('selected');
			$('.cell').addClass('selected');
			init('CellPhones');
		}
	});

}
