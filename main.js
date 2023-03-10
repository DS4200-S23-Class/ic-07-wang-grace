

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top:50, bottom:50};

// add frame
const FRAME1 =
d3.select("#vis1")
	.append("svg")
		.attr("height", FRAME_HEIGHT)
		.attr("width", FRAME_WIDTH)
		.attr("class", "frame"); 


// binding data
const data = [55000, 48000, 27000, 66000, 90000]

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

// scaling functions

const MAX_Y = d3.max(data, (d) => {return d;});
console.log("Max x:" + MAX_Y);

// scale function
const Y_SCALE = d3.scaleLinear()
					.domain([0, (MAX_Y + 10000)])
					.range([0, VIS_HEIGHT]);


FRAME1.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", MARGINS.right + 150)
			.attr("cy", (d) => {
				return (Y_SCALE(d) + MARGINS.top)
			})
			.attr("r", 7)
			.attr("class", "point");

// add an axis
FRAME1.append("g")
		.attr("transform", 
			"translate(" + MARGINS.left + "," + (VIS_WIDTH + MARGINS.top + ")"))
		.call(d3.axisLeft(Y_SCALE).ticks(4))
		.attr("font-size", "20px");



