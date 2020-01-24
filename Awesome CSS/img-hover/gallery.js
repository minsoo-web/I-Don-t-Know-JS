$(document).ready(function() {
  $(".gallery button").on("mouseover mouseout", function() {
    $(this)
      .parent()
      .toggleClass("on");
  });
});
