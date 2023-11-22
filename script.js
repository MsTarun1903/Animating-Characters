const body = document.querySelector("body")

const colors = [
    "#000000", "#FFFFFF", "#808080", "#C0C0C0", "#800000", "#FF0000", "#800080", "#FF00FF", 
    "#008000", "#00FF00", "#808000", "#FFFF00", "#000080", "#0000FF", "#008080", "#00FFFF", 
    "#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF00FF", "#BA55D3", "#9370DB", 
    "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080", "#4B0082", "#6A5ACD", "#483D8B", 
    "#7B68EE", "#ADADD6", "#6A5ACD", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", 
    "#800080", "#4B0082", "#483D8B", "#E6E6FA", "#D8BFD8", "#DDA0DD", "#DA70D6", "#EE82EE", 
    "#FF00FF", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080"
  ];

setInterval(()=>{
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    body.style.backgroundColor = randomColor;
    body.style.transition = "all 3s ease-in-out"
},3000);

const wordColors = [
    "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", 
    "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", 
    "#795548", "#9E9E9E", "#607D8B", "#B71C1C", "#880E4F", "#4A148C", "#311B92", "#1A237E", 
    "#0D47A1", "#01579B", "#006064", "#004D40", "#1B5E20", "#33691E", "#827717", "#F57F17", 
    "#FF6F00", "#E65100", "#BF360C", "#3E2723", "#212121", "#263238", "#FF1744", "#F50057", 
    "#D500F9", "#651FFF", "#3D5AFE", "#2979FF", "#00B0FF", "#00E5FF", "#1DE9B6", "#00E676"
  ];

  let h1 = document.querySelector("h1");
  let letters = h1.textContent.split("");
  letters = letters.map(letter => `<span>${letter}</span>`);
  h1.innerHTML = letters.join("");

  setInterval(e=>{
    let spans = document.querySelectorAll("h1 > span");
    spans.forEach((span,index) => {
  span.style.color = wordColors[Math.floor(Math.random() * wordColors.length)];
  span.style.transition = "all 1s ease-in-out"
    });
  },3000)