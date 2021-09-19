Webcam.set({
    width:350,
    height:350,
    Image_format:"png",
    png_quality:90
});
camera=document.getElementById("webcam");
Webcam.attach(camera);
function takeSnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("capture").innerHTML="<img id='snap' src="+data_uri+">"
     });
}
console.log('ml 5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j-FHmOHZp/model.json', modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
    img=document.getElementById("snap");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("span_obj").innerHTML=results[0].label;
        document.getElementById("span_acc").innerHTML=results[0].confidence.toFixed(3);
    }
}
