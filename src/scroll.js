$(function () {
  $("a.scrollto").click(function () {
   let elementClick = $(this).attr("href")
   let destination = $(elementClick).offset().top;
   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1500);
   return false;
  });
});