noseX=0
noseY=0
function preload(){
    images = loadImage("a.png")
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modeLoaded)
    poseNet.on("pose", gotResults)
}
function draw(){
    image(video, 0, 0, 300, 300)
    image(images, noseX, noseY, 50, 50)
}
function modeLoaded(){
    console.log("Iniciar a ordem 66")
}
function gotResults(results){
    console.log(results)
    if(results.lenght>0){
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
    }
}
function foto(){
    save("foto.png")
}
