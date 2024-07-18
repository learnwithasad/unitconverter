let inch = document.getElementById("inch");
let pixels = document.getElementById("pixels");

inch.addEventListener("input", function () {
  let f = this.value;
  let i = f * 96;
  pixels.value = i;
});

pixels.addEventListener("input", function () {
  let i = this.value;
  let f = i / 96;

  if (!Number.isInteger(f)) {
    f = f.toFixed(2);
  }

  inch.value = f;
});
