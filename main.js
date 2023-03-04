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

function setup(){
    canvas.mouseReleased(classifyCanvas);
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

function gotResult(error,results){
    if(error){
    console.error();
    console.log(results);
    drawSketch = results[0].label;
    document.getElementById("esboco").innerHTML = "Seu Esboço".concat(drawSketch);
    Math.round(results[0].confidence*100) + "%";
}

function updateCanvas(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function draw(){
        strokeWeight(8);
        color("cyan");
        if(mouseIsPressed){
            line(pmouseX,pmouseY,mouseX,mouseY);
        }
    }
}
