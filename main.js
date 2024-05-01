function submit() {
  let username = document.getElementById("username").value;
  let password = +document.getElementById("password").value;
  if (username === `admin`) {
    if (password === 123) {
      alert("Success");
    } else {
      alert("Password xato");
    }
  } else if (password === 123) {
    alert("Username xato ");
  } else {
    alert(`username va password xato`);
  }
}

const isShow = () => {
  let password = document.getElementById("password");
  if (password.type === "password") {
    password.type = `text`;
  } else {
    password.type = `password`;
  }
};

const create = (e) => {
  e.preventDefault();
  let result = document.getElementById("result");
  let width = e.target[0].value;
  let height = e.target[1].value;
  let bg_color = e.target[2].value;
  let border_r = e.target[3].value;
  console.log(width, height, bg_color, border_r);
  result.style.width = `${width}px`;
  result.style.height = `${height}px`;
  result.style.backgroundColor = bg_color;
  result.style.borderRadius = `${border_r}px`;
};
