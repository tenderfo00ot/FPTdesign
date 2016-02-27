Morris.Bar({
  element: 'bar-example',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }

  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  resize: true
}).on('click',function(i,row){
  console.log(row)
  console.log(i,row)
});

Morris.Donut({
  element: 'donut-example1',
  data: [
    {label: "Voted", value: 22},
    {label: "Not Voted", value: 44}]
});

Morris.Donut({
  element: 'donut-example2',
  data: [
    {label: "Voted", value: 40},
    {label: "Not Voted", value: 60}]
});

Morris.Donut({
  element: 'donut-example3',
  data: [
    {label: "Voted", value: 22},
    {label: "Not Voted", value: 76}]
});

Morris.Donut({
  element: 'donut-example4',
  data: [
    {label: "Voted", value: 80},
    {label: "Not Voted", value: 20}]
});

Morris.Donut({
  element: 'donut-example5',
  data: [
    {label: "Voted", value: 80},
    {label: "Not Voted", value: 20}]
});