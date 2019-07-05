function newRequest(response) {
    let {name, birthday, bio} =JSON.parse(response.target.response);
    document.getElementById('name').innerHTML=name;
    document.getElementById('birthday').innerHTML=birthday;
    document.getElementById('bio').innerHTML=bio;
  }
  
   
  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./einstein.json", true);
    xhttp.onload = newRequest;
    xhttp.send();
  }
  
  let submitButton = document.getElementById('finish');
  submitButton.addEventListener('click', loadDoc);