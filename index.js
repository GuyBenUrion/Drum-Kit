for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let btnInnerHtml = this.innerHTML;

    switch (btnInnerHtml) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        btnAnimation(btnInnerHtml)
        break;
      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        btnAnimation(btnInnerHtml)
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        btnAnimation(btnInnerHtml)
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        btnAnimation(btnInnerHtml)
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        btnAnimation(btnInnerHtml)
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        btnAnimation(btnInnerHtml)
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        btnAnimation(btnInnerHtml)
        break;

      default:
        console.log(btnInnerHtml);

    }
  });
}

addEventListener("keydown", function(event) {
  switch (event.key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      btnAnimation(event.key)
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      btnAnimation(event.key)
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      btnAnimation(event.key)
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      btnAnimation(event.key)
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      btnAnimation(event.key)
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      btnAnimation(event.key)
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      btnAnimation(event.key)
      break;

    default:
      console.log(btnInnerHtml);

  }
})

function btnAnimation(curKey){
  var activeBtn = document.querySelector("." + curKey);
  activeBtn.classList.add("pressed");
  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);
}
