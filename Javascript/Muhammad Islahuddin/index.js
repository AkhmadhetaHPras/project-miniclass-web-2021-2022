document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.querySelector("input[placeholder=username]");
    let password = document.querySelector("input[placeholder=password]");
    if (username.value && password.value) {
      alert("Hello " + username.value);
      username.value = "";
      password.value = "";
    } else {
      alert("username / password tidak boleh kosong");
    }
  });