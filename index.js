let shape;

function hide() {
    document.getElementById("Width").style.display = "none";
    document.getElementById("Breadth").style.display = "none";
    document.getElementById("Height").style.display = "none";
    document.getElementById("Radius").style.display = "none";
    document.getElementById("circlePic").style.display = "none";
    document.getElementById("squarePic").style.display = "none";
    document.getElementById("rectanglePic").style.display = "none";
    document.getElementById("heightLabel").style.display = "none";
    document.getElementById("radiusLabel").style.display = "none";
    document.getElementById("widthLabel").style.display = "none";
    document.getElementById("breadthLabel").style.display = "none";
    document.getElementById("submit").style.display = "none";
}

function circleClick() {
    document.getElementById("circlePic").style.display = "block";

    document.getElementById("Radius").style.display = "block";
    document.getElementById("radiusLabel").style.display = "block";

    document.getElementById("submit").style.display = "block";

    shape = 'circle';

}

function squareClick() {
    document.getElementById("squarePic").style.display = "block";

    document.getElementById("widthLabel").style.display = "block";
    document.getElementById("Width").style.display = "block";
    
    document.getElementById("submit").style.display = "block";

    shape = 'square';
}

function rectangleClick() {
    document.getElementById("rectanglePic").style.display = "block";

    document.getElementById("widthLabel").style.display = "block";
    document.getElementById("Width").style.display = "block";
    
    document.getElementById("breadthLabel").style.display = "block";
    document.getElementById("Breadth").style.display = "block";
    
    document.getElementById("submit").style.display = "block";

    shape = 'rectangle';
}

function calculateArea() {

    if (shape == 'circle') {

        let circleRadius = document.getElementById("Radius").value;

        circleAreaCalculate(circleRadius)
    }

    else if (shape == 'square') {

        let squareWidth = document.getElementById("Width").value;

        squareAreaCalculate(squareWidth);
    }
    else if (shape == 'rectangle') {
        let rectangleWidth = document.getElementById("Width").value;
        let rectangleBreadth = document.getElementById("Breadth").value;

        rectangleAreaCalculate(rectangleWidth, rectangleBreadth);
    }
}

function circleAreaCalculate(radius) {

    let area = (radius*radius)*(3.14);

    document.getElementById("msg").innerHTML = "The Area of Circle is : " + area +"";

}

function squareAreaCalculate(width) {
    let area = (width*width);

    document.getElementById("msg").innerHTML = "The Area of Square is : " + area +"";
}

function rectangleAreaCalculate(width, breadth) {

    let area = (width)*(breadth);

    document.getElementById("msg").innerHTML = "The Area of Rectangle is : " + area +"";
}