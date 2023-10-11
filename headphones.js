img = "";
status = "";
objects = "";
array = [];
//results[] = array[];

function preload()
{
    img = loadImage('headphones.jpg');
}

function setup() 
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() 
{
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
        for (i = 0; i < objects.length; i++) 
        {

            document.getElementById("status").innerHTML = "Status : Detecting Objects";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",
            objects[i].x + 15, objects[i].y + 15);
        
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
        document.getElementById("objects").innerHTML = "There are 6 big objects in the image from which the cocossd model has detected 1 object";

}


function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);

}

function gotResults(error, results) 
{
    if (error) 
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
