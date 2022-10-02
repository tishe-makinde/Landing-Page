var clicked = false

$(".big-icon").click(function() {
  $(".big-icon").text("Hello world!");
});

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
  $(".description").text('"I am a full stack developer based in Oxford, UK. I am very proficient in the MERN tech stack with more than enough versality to adapt to other languages and libraries you may need."')
})
