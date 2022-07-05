setTimeout(() => {}, 500);

document.onselectstart = function() {
	return false;
}

// Making the olympics symbol using the drawCircle function

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

circle_btn = document.getElementById("sel_circle");
square_btn = document.getElementById("sel_rect");

let shape = "circle";
let color = "red";

function drawOlympics(x, y, size = 40, color = "red") {
	drawCircle(x, y, size, color);
	drawCircle(x + 60, y, size, color);
	drawCircle(x + 120, y, size, color);
	drawCircle(x + 32, y + 50, size, color);
	drawCircle(x + 92, y + 50, size, color);
}

function makeCircle() {
	shape = "circle";
}

function makeSquare() {
	shape = "square";
}

function makeOlympics() {
	shape = "olympics";
}

function colorRed() {
	color = "red";
}

function colorBlack() {
	color = "black";
}

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(x, y, size = 40, color = "red") {
	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
	ctx.arc(x, y, size, 0, 2*Math.PI);
	ctx.stroke();
}

function drawRect(x, y) {
	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
	ctx.rect(x-50, y-50, 80, 80);
	ctx.stroke();
}

canvas.addEventListener("mousedown", mousedown);
document.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		clearCanvas();
	}
})

function mousedown(e) {
	x = e.clientX - canvas.offsetLeft;
	y = e.clientY - canvas.offsetTop;

	if (shape == "circle") {
		drawCircle(x, y, 40, color);
	} else if (shape == "square") {
		drawRect(x, y, 40, color);
	} else if (shape == "olympics") {
		drawOlympics(x, y, 40, color);
	}
}
