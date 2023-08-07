let btn = document.querySelector("button");

  btn.addEventListener("click", function() {
    let getRandomColor = generateColor();
    let colorCode = document.querySelector(".value");
    colorCode.innerText = getRandomColor;

    let colorBox = document.querySelector(".colorBox");
    colorBox.style.backgroundColor = getRandomColor;
  });

  function generateColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red},${green},${blue})`;
    return color;
  }


let h2 = document.querySelector("h2");
h2.addEventListener("dblclick", function(){
    this.style.backgroundColor = "purple";
})

