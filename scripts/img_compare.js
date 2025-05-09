document.querySelectorAll(".img_compare").forEach((compareContainer) => {
  const slider = compareContainer.querySelector(".img_compare_slider");
  const beforeImg = compareContainer.querySelector(".before_img_compare");
  const sliderLine = compareContainer.querySelector(".slider_line");
  const sliderIcon = compareContainer.querySelector(".slider_icon");

  slider.addEventListener("input", (i) => {
    let sliderValue = i.target.value + "%";
    beforeImg.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
  });
});
