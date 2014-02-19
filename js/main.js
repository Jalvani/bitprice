jQuery(document).ready(function($) {

	jQuery.get('https://api.bitcoinaverage.com/all', '' , function(response, textStatus, xhr) {
	//optional stuff to do after success

	console.log(response);
	console.log(response.USD.last)
	yesterdollars = response.USD.averages['24h_avg']
	lastdollars   = response.USD.averages.last
	jQuery('#btcprice').html("$ "+response.USD.averages.last+" dollars")


	difference = lastdollars - yesterdollars
	if (difference > 0) {
		word = " more "
		style = 'green'
	} else {
		word = " less "
		style = 'red'
	}
	rounded = Math.round(Math.abs(difference)*100)/100

	$('#yesterdays_price').html(
		'This is $'+rounded+'<span id="word" style="color:'+style+'">'+ word +'</span> than yesterday'
		);
	});
});
