fetch('https://script.google.com/macros/s/AKfycby337o2QqYerofvtWQ8HMlGTL-pQxcICTXZtl8QuH0KIV3cwXBGtMdECS0wSGVkUl0D/exec')
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
