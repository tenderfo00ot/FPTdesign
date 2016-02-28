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

