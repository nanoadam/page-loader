let loaderdiv = document.querySelector("#loader-div");
let main = document.querySelector("main");
function loader() {
  let loaderTimeout = setTimeout(showPage, 2000);
}

function showPage() {
  loaderdiv.style.display = "none";
  main.style.display = "block";
}

//loader();
