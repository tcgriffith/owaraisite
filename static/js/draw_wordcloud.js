
list = [];
for (var i in db) {
  if ( db[i]["freq"] > 0){
    list.push([db[i]["word"], db[i]["freq"]])
  }

}

var div = document.getElementById("sourrounding_div")

var canvas = document.getElementById("canvas_cloud");

canvas.height = div.offsetHeight;

canvas.width  = div.offsetWidth;

var options =
{
  list : list,
  gridSize: Math.round(8 * document.getElementById('canvas_cloud').offsetWidth / 1024),
  weightFactor: function (size) {

     wf = Math.pow(size, 0.3) * 15 * document.getElementById('canvas_cloud').offsetWidth / 1024;
      console.log(wf);
     return wf
    // return 180/max(size);
  },
  rotateRatio: 0.5,
  rotationSteps: 2,
  backgroundColor: "transparent"
}

WordCloud(document.getElementById('canvas_cloud'), options);
