timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;


array1=["Caneta","Papel","Livro","Garrafa"];
randomNumber = Math.floor((Math.random() *array1.length)+1);
console.log(randomNumber);
sketch = array1[randomNumber];
console.log(sketch);
desenho = document.getElementById("desenho").innerHTML = sketch;
console.log(desenho);
//juntar = desenho + sketch;
//console.log(juntar);