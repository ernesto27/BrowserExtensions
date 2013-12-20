var wrapSongs = $("#list-songs");
var loading = $("#loading");
var url = "http://www.metallicabyrequest.com/results.php?s="


function getListConcert(id){
	$.ajax({
		url: url + id,
		type: "GET",

	}).done(function(data){
		var songNames = $(data).find(".resultLabel");
		var countVotes = $(data).find('.resultTotal');
		loading.hide();
		
		songNames.each(function(index){
			if( index < 17){
				var songText = $(this).text() + "<span class='votes'>votes " + countVotes .get(index).innerText;+"</span>";
				var divWrap = $("<div>",{
					class:"single-song",
					html: songText
				});
				
				wrapSongs.append(divWrap)
			}else{
				return;
			}
		});
	});

}


// SELECT COUNTRY
$("#select-country").on("change", function(e){
	loading.show();
	wrapSongs.empty();
	idConcert = this.value;
	getListConcert(idConcert);
});


