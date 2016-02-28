

$('#level').on('changed.bs.select', function (e) {
	if(e.currentTarget.value==="District"){
		refreshView();
		$("#changeView").append("<div class='panel-heading'>Municipal</div>");
		$("#changeView").append("<div id='bar-example'></div>");
		graphDistrict();
	}
	else if(e.currentTarget.value==="Barangay"){
		refreshView();
		$("#changeView").append("<div class='panel-heading'>Barangay</div>");
		$("#changeView").append("<div id='bar-example'></div>");
		graphMunicipal();
	}
	else if(e.currentTarget.value==="Precinct"){
		refreshView(e.currentTarget.value);
		$("#changeView").append("<div class='panel-heading'>Precinct</div>");
		$("#changeView").append("<div id='precinct-view'></div>");
		for(var x=0; x<20; x++)
		{
		$("#precinct-view").append("<div class='div-container' align='center'><div><img class='custom-img' src='img/img-box.png'></div><div class='custom-precint'>"+'Precint-'+x+"</div><div class='custom-votes'>Votes:"+(x*20+123)+"</div></div>");
		}
	}
});


function refreshView(){
	$("#bar-example").remove();
 	$(".panel-heading").remove();
 	$("#precinct-view").remove();
}


function graphDistrict(){
	Morris.Bar({
		barSizeRatio:0.15,
		element: 'bar-example',
		data: [
		{ y: 'District 1', a: 100},
		{ y: 'District 2', a: 32}
		],
		hoverCallback: function(index, options, content, row) {
      	return "<strong>"+row.y+"</strong>" + "<br>" + "<span style='color:#10DCFF;'>"+row.a + "%"+"</span>";
  		},
		barColors: ['#6495ED'],
		xkey: 'y',
		ykeys: ['a'],
		labels: ['Series A'],
		resize: true
		}).on('click',function(i,row){
		$('.selectpicker').selectpicker('val', 'Barangay');
		refreshView();
		$("#changeView").append("<div class='panel-heading'>Barangay</div>");
		$("#changeView").append("<div id='bar-example'></div>");
		graphMunicipal();
	});
}

function graphMunicipal(){
	Morris.Bar({
		barSizeRatio:0.8,
		element: 'bar-example',
		hoverCallback: function(index, options, content, row) {
      	return "<strong>"+row.y+"</strong>" + "<br>" + "<span style='color:#10DCFF;'>"+row.a + "%"+"</span>";
  		},
		data: [
		{ y: 'ADLAWON', a: 100},
		{ y: 'AGSUNGOT', a: 30},
		{ y: 'APAS', a: 40},
		{ y: 'BACAYAN', a: 50},
		{ y: 'BANILAD', a: 60},
		{ y: 'BINALIW', a: 80},
		{ y: 'BUSAY', a: 20},
		{ y: 'CAMBINOCOT', a: 20},
		{ y: 'CAPITOL SITE', a: 90},
		{ y: 'CARRETA', a: 50},
		{ y: 'COGON RAMOS', a: 70},
		{ y: 'DAY-AS', a: 60},
		{ y: 'ERMITA', a: 30},
		{ y: 'BABAG', a: 30},
		{ y: 'INAYAWAN', a: 30},
		{ y: 'SINSIN', a: 30},
		{ y: 'TISA', a: 30},
		{ y: 'PASIL', a: 30},
		{ y: 'CALAMBA', a: 30},
		{ y: 'GUADALUPE', a: 30},
		{ y: 'QUIOT PARDO', a: 50},
		{ y: 'KALUBIHAN', a: 66},
		{ y: 'LAHUG', a: 89},
		{ y: 'LUZ', a: 66},
		{ y: 'MABOLO', a: 69},
		{ y: 'PARIAN', a: 52},
		{ y: 'SAMBAG 1', a: 32},
		{ y: 'SAMBAG 2', a: 48}
		],
		barColors: ['#6495ED'],
		xkey: 'y',
		ykeys: ['a'],
		labels: ['Series A'],
		resize: true
		}).on('click',function(i,row){
		$('.selectpicker').selectpicker('val', 'Precinct');
		refreshView();
		$("#changeView").append("<div class='panel-heading'>Precinct</div>");
		$("#changeView").append("<div id='precinct-view'></div>");
		for(var x=0; x<20; x++)
		{
		$("#precinct-view").append("<div class='div-container' align='center'><div><img class='custom-img' src='img/img-box.png'></div><div class='custom-precint'>"+'Precint-'+x+"</div><div class='custom-votes'>Votes:"+(x*20+123)+"</div></div>");
		}
	});
}