fetch('https://script.google.com/macros/s/AKfycbwjmHynzWVWW3HEDOTqU63sWB0Bf_v1X1LoWobs1StQi2kooIVIwIPoBuwsuDW1dIZ3cg/exec')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('tableBody');
      data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${row.prodi}</td>
          <td>${row.mitra}</td>
          <td>${row.dosen}</td>
        `;
        tableBody.appendChild(tr);
      });
    })
    .catch(error => console.error('Error:', error));
