status = "";

function preload()
{
  basketball = loadImage("basketball.jpg");

}

function setup()
{
  canvas = createCanvas(400, 400);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
  console.log('Model Is Loaded');
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
  if(error)
  {
    console.log(error);
  }
  console.log(results);
}