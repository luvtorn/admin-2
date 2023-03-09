function proverka() {
  let login = document.getElementById('login').value;
  let pass = document.getElementById('password').value;

  if(login=="admin" && pass=="admin"){
    window.location.href = "https://www.youtube.com/"
  }else{
    alert("Siema")
  }
}