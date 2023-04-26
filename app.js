// get all the elements with the class name "container"
let containers = document.getElementsByClassName("container");

// print out the value of containers
console.log(containers);

// loop through the collection
for (let i = 0; i < containers.length; i++) {
  // add event listeners for mouseenter and mouseleave events
  containers[i].addEventListener("mouseenter", handler); // use mouseenter instead of mouseover
  containers[i].addEventListener("mouseleave", handler); // use mouseleave instead of mouseout
}

function handler(event) {
  if (event.type == "mouseenter") {
    // show the text container and text of the current container
    event.currentTarget.querySelector(".textDiv").style.display = "block"; // use opacity instead of visibility
    event.currentTarget.querySelector(".text").style.display = "flex";
  }
  if (event.type == "mouseleave") {
    event.currentTarget.style = "";

    // hide the text container and text of the current container
    event.currentTarget.querySelector(".textDiv").style.display = "none"; // use opacity instead of visibility
    event.currentTarget.querySelector(".text").style.display = "none";
  }
}
