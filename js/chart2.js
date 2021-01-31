var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 12, 33, 40, 41, 50, 0, 12, 33, 40, 41, 50,0, 12, 33, 40, 41, 50],
        datasets: [{
            label: 'Количество расходов',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 1)',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    },
});

var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
      labels: [0, 12, 33, 40, 41, 50, 0, 12, 33, 40, 41, 50,0, 12, 33, 40, 41, 50], 
      datasets: [{
          label: 'Расход',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 1)',
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
              }
          }]
      }
  },
});
