$(document).ready(function(){
  $("#designImage").click(function(){
    $("#designImage").slideDown('1500').hide('1000');
    $("#designText").show('1500');
  });
  $("#designText").click(function(){
    $("#designText").slideUp('1500');
    $("#designImage").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#developmentImage").click(function(){
    $("#developmentImage").slideDown('1500').hide('1000');
    $("#developmentText").show('1500');
  });
  $("#developmentText").click(function(){
    $("#developmentText").slideUp('1500');
    $("#developmentImage").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#productManagementImage").click(function(){
    $("#productManagementImage").slideDown('1500').hide('1000');
    $("#productManagementText").show('1500');
  });
  $("#productManagementText").click(function(){
    $("#productManagementText").slideUp('1500');
    $("#productManagementImage").slideDown('1500');
  });
});



$(document).ready(function(){
  $("#featuredWork").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#featuredWork1").mouseover(function(){
    $("#overlay1").show();
  }).mouseout(function(){
    $("#overlay1").hide();
  });
});
$(document).ready(function(){
  $("#featuredWork2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#featuredWork3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#featuredWork4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});
$(document).ready(function(){
  $("#featuredWork5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
});
$(document).ready(function(){
  $("#featuredWork6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
});
$(document).ready(function(){
  $("#featuredWork7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
});

$(document).ready(function(){
  $("form#feedbackForm").submit(function(event){
    var name = $("input#userName").val();
    var email = $("input#inputEmail").val();
    var message = $("textarea#userMessage").val();
    if ($("input#userName").val() && $("input#inputEmail").val()){
      alert (name + ", We have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

  });

});
