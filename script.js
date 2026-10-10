// bg color and dirnk color
var flavours = {
  "taro":        ["#e4d4f0", "#9c7db8"],
  "matcha":      ["#dcebc8", "#99b275"],
  "strawberry":  ["#fbd3dc", "#e79cac"],
  "brown sugar": ["#f3d9c4", "#c48a5a"],
  "mango":       ["#fdeaa8", "#f7b733"]
};

var bobaSlider = document.getElementById("boba");
var milkSlider = document.getElementById("milkSlider");
var flavourSelect = document.getElementById("flavour");
var milk = document.getElementById("milk");
var pearls = document.getElementById("pearls");

//boba
var xs = [];
var ys = [];
for (var i = 0; i < 20; i++) {
  xs.push(Math.random() * 100);
  ys.push(Math.random() * 46);
}

function update() {
  var count = bobaSlider.value;
  var milkAmt = milkSlider.value;
  var colors = flavours[flavourSelect.value];

  document.documentElement.style.setProperty("--bg", colors[0]);
  document.documentElement.style.setProperty("--tea", colors[1]);

  milk.style.height = milkAmt * 2.2 + "px";

  pearls.innerHTML = "";
  for (var i = 0; i < count; i++) {
    var p = document.createElement("div");
    p.className = "pearl";
    p.style.left = xs[i] + "px";
    p.style.bottom = ys[i] + "px";
    pearls.appendChild(p);
  }

  document.getElementById("bobaVal").textContent = count;
  document.getElementById("milkVal").textContent = milkAmt;
}

bobaSlider.oninput = update;
milkSlider.oninput = update;
flavourSelect.onchange = update;

update();