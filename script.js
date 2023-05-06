function showContent(contentId) {
    var contents = document.getElementsByClassName("hidden");
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
  
    var content = document.getElementById("content-" + contentId);
    if (content) {
      content.style.display = "block";
    }
  }
  function showParagraph() {
    var paragraph = document.getElementById("paragrafoph")
  }

  function showParagraph() {
    var paragraph = document.getElementById("paragraph");
    var words = paragraph.innerText.split(" ");
    paragraph.innerText = "";
    var index = 0;
    var interval = setInterval(function() {
      paragraph.innerText += words[index] + " ";
      index++;
      if (index >= words.length) {
        clearInterval(interval);
      }
    }, 80);
  }