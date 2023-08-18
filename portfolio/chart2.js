const ctx2 = document.getElementById('doughnut');        
const doughnut =new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['java', 'css', 'html','python'],
    datasets: [{
      label: 'Skills',
      data: [10,10,20,60],
      backgroundColor: [
        'rgb(86, 101, 115,0.7)',
        'rgb(203, 67, 53,0.7)',
        'rgb(108, 52, 131,0.7)',
        'rgb(222, 49, 99,0.7)'
      ],
      backgroundColor: [
        'rgb(86, 101, 115,0.7)',
        'rgb(203, 67, 53,0.7)',
        'rgb(108, 52, 131,0.7)',
        'rgb(222, 49, 99,0.7)'
      ],
      borderWidth: 4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});