$("document").ready(function () {
  $(".nav-more-item").mouseover(function () {
    $(".dropdown-list").show();
  });
  $(".nav-more-item").mouseleave(function () {
    $(".dropdown-list").hide();
  });
});
