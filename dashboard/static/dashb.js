
function setupCommentsDays(dict){
    dict = {
        'Sun': dict.Sun,
        'Mon': dict.Mon,
        'Tues': dict.Tues,
        'Wed': dict.Wed,
        'Thur': dict.Thur,
        'Fri': dict.Fri,
        'Sat': dict.Sat

    }
    const labels = Object.keys(dict)
    const data = {
    labels: labels,
    datasets: [{
      label: 'What days do I post the most?',
      backgroundColor: 'rgba(240, 93, 35, 1)',
      borderColor: 'rgba(240, 93, 35, 1)',
      data: Object.values(dict),
      fill: {
              target: 'origin',
              above: 'rgb(255, 0, 0)',   // Area will be red above the origin
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            }
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {
      //either xAxis or x
    //   scales: {
    //     xAxis: {
    //         type: 'linear'
    //     },
    //     yAxis: {
    //         type: 'linear'
    //     }
    // },
      plugins: {
          // title: {
          //   display: true,
          //   text: 'Something'
          // }
      }
    }
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
    
}
// working on new chart
new Chart(ctx, {
  data: {
      datasets: [
          {
            fill: {
              target: 'origin',
              above: 'rgb(255, 0, 0)',   // Area will be red above the origin
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            }
          }
      ]
  }
});
   //Pie chart config 
function setupSubPieChart(topSubs){
    const entries = Object.entries(topSubs)
    entries.sort(function(a, b){
        if(a[1] < b[1]) { return 1; }
        if(a[1] > b[1]) { return -1; }
        return 0;
      })
      subsArray = []
      countsArray = []
      count = entries.length
      if(count > 10){count = 10}
      for (let i = 0; i < count; i++) {
      subsArray.push(entries[i][0]);
      countsArray.push(entries[i][1]);
      }
      const dataPie = {
      labels: subsArray,
      datasets: [{
      label: 'My First Dataset',
      data: countsArray,
      backgroundColor: [
        'rgba(60, 145, 230, 1)',
        'rgba(52, 46, 55, 1)',
        'rgba(240, 93, 35, 1)',
        'rgba(46, 71, 86, 1)'
      ],
      hoverOffset: 4
      }]
    };

      const configPie = {
      type: 'pie',
      data: dataPie,
      options: {
      responsive: true,
      plugins:{
        title: {
          display: false,
          text: 'Hover to see Subreddits'
        },
        legend:{
          display: false
            }
        }
      }
    };

    const pieChart1 = new Chart(
    document.getElementById('pieChart1'),
    configPie
    );
}
// this is some jquery. It only loads after the elements on the page loads I think. 
function makeCloud(data){
  $(document).ready(function()
  {
    $("#wordCloud").jQWCloud({
      words: data,
      // cloud_color: 'rgba(60, 145, 230, 1)',
      minFont: 10,
      maxFont: 50,
      //fontOffset: 5,
      //cloud_font_family: 'Owned',
      verticalEnabled: true,
      padding_left: 1,
      //showSpaceDIV: true,
      //spaceDIVColor: 'white',
      word_common_classes: 'WordClass',		
      word_mouseEnter :function(){
        $(this).css("text-decoration","underline");
      },
      word_mouseOut :function(){
        $(this).css("text-decoration","none");	
      },
      word_click: function(){ 			
        alert("You have selected:" +$(this).text());
      },		              
      beforeCloudRender: function(){
            date1=new Date();
      },
      afterCloudRender: function(){
          var date2=new Date();
          console.log("Cloud Completed in "+(date2.getTime()-date1.getTime()) +" milliseconds");
        }
    });
    
  });
}