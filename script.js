var images = JSON.parse(localStorage.getItem("list_images")) || [];

function addImage(){
    var image = {};
    var url = document.querySelector('input').value;
    if(url==""){
    document.getElementById('error').innerHTML = "please enter a valid URL";
    setTimeout(()=>{ document.getElementById('error').innerHTML = "";},4000)
    }
    else{
      image.URL = url;
      images.push(image);
      document.querySelector('input').value ="";
      localStorage.setItem("list_images", JSON.stringify(images));
      buildCarousel();
    }
}


function buildCarousel()
{
  const imageData = JSON.parse(localStorage.list_images);
  for (var i = 0; i < imageData.length; i++){

    // creating the carousel item element
        var div = document.createElement('div');
        div.className = "carousel-item";
        document.getElementById('carousel').append(div);
    // appending image to it
        var image = document.createElement("img");
        image.className = "d-block w-100";
        image.setAttribute("src", imageData[i].URL);
        div.append(image);
  }
}



function scrollToPhase1(){
  var element = document.getElementById("phase1");
  element.scrollIntoView();
  element.scrollIntoView({behavior: "smooth", block: "phase1", inline: "nearest"});
  }

function scrollToPhase2(){
    var element = document.getElementById("phase2");
    element.scrollIntoView();
    element.scrollIntoView({behavior: "smooth", block: "phase2", inline: "nearest"});
}

function scrollToPhase3(){
  var element = document.getElementById("phase3");
  element.scrollIntoView();
  element.scrollIntoView({behavior: "smooth", block: "phase3", inline: "nearest"});
}

function scrollToPhase4(){
  var element = document.getElementById("phase4");
  element.scrollIntoView();
  element.scrollIntoView({behavior: "smooth", block: "phase4", inline: "nearest"});
}
