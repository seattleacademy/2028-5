console.clear()
console.log("hello world")

$("input").change(onChange);

function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();

  console.log(md5(response));
  if (correct == md5(response)) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
    let theScore = Number($("#score").text());
    theScore = theScore + 1;
    $("#score").text(theScore);
  } else {
   
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}
