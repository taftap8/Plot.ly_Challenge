//fetch data and read JSON file
d3.json("samples.json").then((data) => {
    //select html
    var dropDown = d3.select('#selDataset');
    console.log(data);
    //append to list
    data.names.forEach((name) => {
        dropDown.append('option').text(name).property('value', name);
    })
});

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
    
    // //grab html values
    // var dropDown = d3.select('#selDataset');
    // for (index in data.names) {
    //     dropDown.options[dropDown.options.length] = new Option(data.names[index], index);
    // };
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