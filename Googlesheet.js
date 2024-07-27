const scriptURL = 'https://script.google.com/macros/s/AKfycbxKe3fb8a_d9A2zSBEZamF_YF2NnVvdkduRrjKxZgFNN8n540mQnE1G17lmWpPQiqHfBA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})