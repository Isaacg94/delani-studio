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
