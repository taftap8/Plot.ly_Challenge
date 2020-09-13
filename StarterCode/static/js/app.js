d3.json("data/samples.json").then((data) => {
    var nameIDs = data.names;
    var metadata = data.metadata;
    var results = metadata.filter(speciman => speciman.id == sample);
    var result = results[0];
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values; 
    //create traces
    var trace1 = {
        x: otu_ids,
        y: sample_values,
        type: "bar",
        name: otc_labels
    };
    //create data for plot
    var data = [trace1];
    //create layout attributes
    var layout = {
        title: "Bacteria Diversity",
        xaxis: {title: "Participant IDs"},
        yaxis: {title: "Values"}
    }
    Plotly.newPlot("bar", data, layout);
}