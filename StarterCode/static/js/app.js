//fetch data and read JSON file
d3.json("samples.json").then((data) => {
    //select html
    var dropDown = d3.select('#selDataset');
    // replace "onchange function"
    dropDown.on("change", function() {
        // get value attribute of select field
        const sampleID = dropDown.property("value");

        // find the sample in json collection
        const sample = data.samples.find((s) => s.id === sampleID);

        // slice the top 10 of each array
        const toptenIDs = sample.otu_ids.slice(0,10);
        const toptenValues = sample.sample_values.slice(0,10);
        const toptenLabels = sample.otu_labels.slice(0,10);

        // bar chart configuration
        Plotly.newPlot("bar", [{
            y: toptenIDs.map((id) => `OTU ${id}`),
            x: toptenValues,
            type: "bar",
            name: toptenLabels,
            orientation: 'h'
        }], {
            title: "Bacteria Diversity",
            xaxis: { title: "Values" },
            yaxis: { title: "OTU IDs" }
        });
    });
    console.log(data);
    //append to list
    data.names.forEach((name) => {
        dropDown.append('option').text(name).property('value', name);
    })
    
});

// function optionChange(sampleID) {
//     console.log("optionChange", sampleID);
//     d3.json("samples.json").then((data) => {
//         //bar chart
    //     const samples = data.samples;
    //     const sample = samples.find((s) => s.id === sampleID);
    //     const toptenIDs = sample.otu_ids.slice(0,10);
    //     const toptenValues = sample.sample_values.slice(0,10);
    //     const toptenLabels = sample.otu_labels.slice(0,10);

    //     Plotly.newPlot("bar", [{
    //         y: toptenIDs.map((id) => `OTU ${id}`),
    //         x: toptenValues,
    //         type: "bar",
    //         name: toptenLabels,
    //         orientation: 'h'
    //     }], {
    //         title: "Bacteria Diversity",
    //         xaxis: { title: "Values" },
    //         yaxis: { title: "OTU IDs" }
    //     });
    // });
        

//         const metadata = data.metadata;
        
//     })
// };
// d3.json("samples.json").then((data) => {

//     console.log(data);
//     var nameIDs = data.names;
//     var metadata = data.metadata;
//     var sample = data.samples;
//     var sampleID = data.samples[0].id;
//     console.log(sampleID);
    // var otu_ids = result.otu_ids;
    // var otu_labels = result.otu_labels;
    // var sample_values = result.sample_values; 

//});
    // function optionChange (value){
    //     console.log(value);
    // }
    // //create traces
    // var trace1 = {
    //     x: otu_ids,
    //     y: sample_values,
    //     type: "bar",
    //     name: otc_labels
    // };
    // //create data for plot
    // var data = [trace1];
    // //create layout attributes
    // var layout = {
    //     title: "Bacteria Diversity",
    //     xaxis: {title: "Participant IDs"},
    //     yaxis: {title: "Values"}
    // };
    // Plotly.newPlot("bar", data, layout);