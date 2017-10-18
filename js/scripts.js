$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputFood = $("input#food").val();
    var inputMusic = $("input#music").val();
    var inputNumber = $("#number").val();
    var inputBorn = $("#born").val();
    var inputColor = $("#color").val();
    var inputFlavor = $("input:radio[name=flavor]:checked").val();
    var inputDescription = $("#description").val();

    $(".name").text(inputName);
    $(".food").text(inputFood);
    $(".music").text(inputMusic);
    $(".number").text(inputNumber);
    $(".born").text(inputBorn);
    $(".color").text(inputColor);
    $(".flavor").text(inputFlavor);
    $(".description").text(inputDescription);
    $(".success").show();
  });
});
