// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

var clicked = false

$(".description").mouseover(function() {
  if (clicked === false) {
    $(".description").addClass("hover-effect")
  }
});
$(".description").mouseout(function() {
  $(".description").removeClass("hover-effect")
});

$(".description").click(function() {
  clicked = true
  $(".about").text('"I am a full stack developer based in Oxford, UK. I am very proficient in the MERN tech stack with more than enough versality to adapt to other languages and libraries you may need."')
  // ReactDOM.render(<App />, document.getElementByClass("about"));
})

