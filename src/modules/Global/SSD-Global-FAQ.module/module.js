let _faqLabel = $("#faqmobilemenu #faqMenu");

_faqLabel.text($("#faqmobilemenu .dropdown-menu a.active").text());

$("#faqmobilemenu .dropdown-menu").on("click", "a", function () {
  _faqLabel.text($(this).text());
});
