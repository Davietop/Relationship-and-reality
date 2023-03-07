const button = document.querySelector("#send");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const params = {
    from_name: document.querySelector("#f_name").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#question").value,
  };

  emailjs
    .send("service_ll4esj6", "template_i6q3iwr", params)
    .then((res) => {
      alert(`Message sent${res.status}`);
    })
    .catch((err) => alert(err));
});
