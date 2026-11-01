$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#readyStatus").text("jQuery is ready!");

  // Task 1: selectors and CSS
  $("#textBtn").click(function () {
    $("#demoId").text("The text was changed with .text()!");
  });
  $("#htmlBtn").click(function () {
    $(".demoClass").html("<strong>HTML content</strong> was changed with .html()!");
  });
  $("#cssBtn").click(function () {
    $("p").css("color", "#4169e1");
  });

  // Task 2: visibility methods
  $("#hideBtn").click(function () { $("#visibilityText").hide(); });
  $("#showBtn").click(function () { $("#visibilityText").show(); });
  $("#toggleBtn").click(function () { $("#visibilityText").toggle(); });

  // Task 3: fade methods
  $("#fadeInBtn").click(function () { $("#fadeImage").fadeIn(500); });
  $("#fadeOutBtn").click(function () { $("#fadeImage").fadeOut(500); });
  $("#fadeToggleBtn").click(function () { $("#fadeImage").fadeToggle(500); });

  // Task 4: slide methods
  $("#slideDownBtn").click(function () { $("#slidePanel").slideDown(400); });
  $("#slideUpBtn").click(function () { $("#slidePanel").slideUp(400); });
  $("#slideToggleBtn").click(function () { $("#slidePanel").slideToggle(400); });

  // Task 5: add and remove elements
  var itemNumber = 2;
  $("#appendBtn").click(function () {
    itemNumber++;
    $("#itemList").append("<li>New item " + itemNumber + "</li>");
  });
  $("#prependBtn").click(function () {
    itemNumber++;
    $("#itemList").prepend("<li>New item " + itemNumber + "</li>");
  });
  $("#removeBtn").click(function () { $("#itemList li:last").remove(); });

  // Task 6: change attributes
  $("#changeSrcBtn").click(function () {
    $("#changeImage").attr("src", "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80");
  });
  $("#changeHrefBtn").click(function () {
    $("#demoLink").attr("href", "https://www.w3schools.com/jquery/");
    $("#demoLink").text("Open jQuery tutorial");
  });

  // Task 7: live form interaction
  $("#nameInput").on("input", function () { $("#nameOutput").text($(this).val() || "—"); });
  $("#emailInput").on("input", function () { $("#emailOutput").text($(this).val() || "—"); });
  $("#liveForm").submit(function (event) { event.preventDefault(); });

  // Task 8: basic animation
  $("#basicAnimateBtn").click(function () {
    $("#basicBox").stop(true).animate({ width: "85px", height: "85px", left: "180px" }, 700);
  });

  // Task 9: sequential animation
  $("#sequenceBtn").click(function () {
    $("#sequenceBox").stop(true).css({ left: "15px", top: "15px", width: "48px", height: "48px" })
      .animate({ left: "230px" }, 500)
      .animate({ top: "155px" }, 500)
      .animate({ width: "22px", height: "22px" }, 500)
      .animate({ left: "15px", top: "15px", width: "48px", height: "48px" }, 500);
  });

  // Task 10: combined animation
  $("#combinedBtn").click(function () {
    $("#combinedBox").stop(true).css({ left: "15px", top: "15px", opacity: 1, width: "48px", height: "48px" })
      .animate({ left: "220px", top: "55px", opacity: 0.35, width: "85px", height: "85px" }, 900);
  });

  // Task 11: image gallery mini project
  $(".gallery-thumb").click(function () {
    var newImage = $(this).attr("data-large");
    $("#mainGalleryImage").fadeOut(180, function () {
      $(this).attr("src", newImage).fadeIn(300);
    });
    $(".gallery-thumb").removeClass("selected");
    $(this).addClass("selected");
  });
});
