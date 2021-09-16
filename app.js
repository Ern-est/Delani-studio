$(document).ready(function () {
    $("#dd1").click(function () {
      $("#dd1").hide();
      $("#dd2").show();
      $("#dd2").click(function () {
        $("#dd2").hide();
        $("#dd1").show();
      });
    });
    $("#dev1").click(function () {
      $("#dev1").hide();
      $("#dev2").show();
      $("#dev2").click(function () {
        $("#dev2").hide();
        $("#dev1").show();
      });
    });
  
    $("#pm1").click(function () {
      $("#pm1").hide();
      $("#pm2").show();
      $("#pm2").click(function () {
        $("#pm2").hide();
        $("#pm1").show();
      });
    });
    $("#navyblue").hover(function () {
      $("#Bs").show();
    },
    function(){
      $("#Bs").hide();
    });
  
    $("#Ontario").hover(function () {
      $("#Ont").show();
    },
    function(){
        $("#ont").hide();
    })
  
    $("#Pyramid").hover(function () {
      $("#pyr").show();
    },
    function(){
        $("#pyr").hide();
    })
  
  
    $("#Jim").hover(function () {
      $("#jim").show();
    },
    function(){
        $("#jim").hide();
    })
  
    $("#NiceDay").hover(function () {
      $("#Nice").show();
    },
    function(){
        $("#Nice").hide();
    })
  
    $("#Calculator").hover(function () {
      $("#calc").show();
    },
    function(){
        $("#calc").hide();
    })
  
    $("#burned").hover(function () {
      $("#Burn").show();
    },
    function(){
        $("#Burn").hide();
    })
  
    $("#Giraffe").hover(function () {
      $("#Giraffe").show();
    },
    function(){
        $("#Giraffe").hide();
    })
  
  $("#submit").click(function (e) {
      e.preventDefault();
      
      alert("message received.thanks")
  })
  
  });
  
