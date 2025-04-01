let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    // Toggle the icon between "fa-plus" and "fa-times"
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    // Toggle the visibility of the FAQ content
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse the content
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand the content
    }
  });
}
