const ctx3 = document.getElementById('line');        
const line =new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['รร.รังษีวิทยา', 'รร.รังษีวิทยา', 'มหาวิทยาลัยแม่โจ้'],
    datasets: [{
      label: 'ประวัติการศึกษา',
      data: [2550,2557,2565],
      borderColor: 'rgb(169, 50, 38)',
      borderWidth: 5
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