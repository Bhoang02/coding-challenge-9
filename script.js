// U89173488

document.addEventListener("DOMContentLoaded", function() {
    const data = [1, 2, 3, 4, 5]; // Sample data points
    const container = d3.select("#container");

    container.selectAll(".data-point")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "data-point")
        .on("mouseover", function(event, d) {
            d3.select(this).style("background-color", "firebrick");
        })
        .on("mouseout", function(event, d) {
            d3.select(this).style("background-color", "lightblue");
        });
});
