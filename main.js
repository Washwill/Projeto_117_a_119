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

function draw(){
    checkSketch();
    if(drawSketch = sketch){
        answerHolder = "set";
        score = score + 1;
        pontuacao = document.getElementById("pontuacao").innerHTML = pontos.concat(score);
    }
}

function checkSketch(){
    timerCounter = timerCounter + 1;
    velocidade = document.getElementById("velocidade").innerHTML = tempo.concat(timerCounter);
    console.log(timerCounter);
    if(timerCounter > 400){
        velocidade > 400;
        timerCounter = 0;
        timerCheck = "completed";
    }
    if(timerCheck = "completed"){
        timerCheck = "";
        answerHolder = "";
        updateCanvas();
    }
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function updateCanvas(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
