//fetch data and read JSON file
d3.json("samples.json").then((data) => {
    console.log(data);
    //append Name options to list
    //select html
    var dropDown = d3.select('#selDataset');
    data.names.forEach((name) => {
        dropDown.append('option').text(name).property('value', name);
    });
    // replace "onchange function"
    dropDown.on("change", function() {
        
        //From Samples Array
        // get value attribute of select field
        const sampleID = dropDown.property("value");
        console.log(sampleID);

        // find the sample array in json collection
        const sample = data.samples.find((s) => s.id === sampleID);
        console.log(sample);

        // //Find Metadata Array in json collection
        var demoGraphic = d3.select("#sample-metadata");
        // demoGraphic.html("");
        // //TEST
        // console.log(data.metadata);
        // //const metaData = data.metadata[0].find((s) => s.id === sampleID);
        var metaData = data.metadata.filter((s) => s.id == sampleID);
        console.log(metaData);                                                                                                                             
        Object.entries(metaData[0]).forEach(([key, value]) => demoGraphic.append("h4").html(`<strong>${key}</strong>: ${value}`));
        console.log(demoGraphic);

        // slice the top 10 of each from Sample array
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
             // bubble chart configuration
            Plotly.newPlot("bubble", [{
                y: sample.sample_values, 
                x: sample.otu_ids,
                text: sample.otu_labels,
                mode: "markers",
                marker: { 
                    size: sample.sample_values, 
                    color: sample.otu_ids,
                    colorscale: "Earth"
                }
            }], {
                title: "Bacteria Diversity",
                xaxis: { title: "OTU_IDs" },
                yaxis: { title: "Values" }
                });
    }); 
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