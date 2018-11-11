$(document).ready(function() {
  $('.carousel').carousel();
    $(".clickable").click(function() {
      $("#hide").fadeToggle();
      $("#show").fadeToggle();
  
    });
  });
  
  $(function() {
    $(".fonts").click(function() {
      $(".fade").fadeIn();
  
    });
  });
  
  $(function() {
    $(".pic").click(function() {
      $(".fade").fadeOut();
  
    });
  });
  $(function() {
    $("#fonts").click(function() {
      $("#fade").fadeToggle();
  
    });
  });
  $(function() {
    $("#fonts2").click(function() {
      $("#fade2").fadeToggle();
  
    });
    $(function() {
      $("#fonts3").click(function() {
        $("#fade3").fadeToggle();
    
      });
    });
    $(function() {
      $("#fonts4").click(function() {
        $("#fade4").fadeToggle();
    
      });
    });
  });