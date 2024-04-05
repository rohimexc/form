const scriptURL = 'https://script.google.com/macros/s/AKfycby337o2QqYerofvtWQ8HMlGTL-pQxcICTXZtl8QuH0KIV3cwXBGtMdECS0wSGVkUl0D/exec';
const form = document.forms['pendataan-mitra'];

form.addEventListener('submit', e => {
    e.preventDefault();
  
    // Menonaktifkan tombol submit
    document.getElementById('submit').setAttribute('disabled', 'true');
  
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you! Your form is submitted successfully.');
        window.location.reload();
    })
    .catch(error => {
        console.error('Error!', error);
        alert('Oops! Something went wrong.');
        // Mengaktifkan kembali tombol submit jika terjadi kesalahan
        document.getElementById('submit').removeAttribute('disabled');
    });
  });
  
