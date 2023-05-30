let answer = "Я учу JavaScript!";

function showAnswer() {
  console.log(answer);
  alert(answer);
}

let img = document.getElementById("img");

function showNextPic() {
  img.src = "./assets/img/bernese_pup_2.jpg";
}

function showPrevPic() {
  img.src = "./assets/img/bernese_pup_1.jpg";
}
