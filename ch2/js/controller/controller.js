import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";
import {tableTemplate, tableRowClass, tableTag} from "../template/template.js"
import { Addlayer } from "../../../ch1/verjscroot/getfunction.js";

export function isiRowPoint(value){
    if (value.geometry.type === "Point") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.name).replace("#KORDINAT#",value.geometry.coordinates);
    // console.log(content);
    addChild("lokasi",tableTag,tableRowClass,content);
    }
}

export function isiRowPolygon(value){
    if (value.geometry.type === "Polygon") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.name).replace("#KORDINAT#",value.geometry.coordinates);
    // console.log(content);
    addChild("polygon",tableTag,tableRowClass,content);
    }
}

export function isiRowPolyline(value){
    if (value.geometry.type === "LineString") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.name).replace("#KORDINAT#",value.geometry.coordinates);
    // console.log(content);
    addChild("line",tableTag,tableRowClass,content);
    }
}

// export function MakeGeojsonFromAPI(value) {
//     // Create a GeoJSON feature collection
//     const geojsonFeatureCollection = {
//         type: "FeatureCollection",
//         features: value
//     };

//     // Convert the GeoJSON feature collection to a JSON string
//     const geojsonString = JSON.stringify(geojsonFeatureCollection, null, 2);

//     // Return the JSON string
//     return geojsonString;
// }

export function MakeGeojsonFromAPI(value) {
    const geojsonFeatureCollection = {
        type: "FeatureCollection",
        features: value
    };

    const geojsonString = JSON.stringify(geojsonFeatureCollection, null, 2);

    const blob = new Blob([geojsonString], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    // link.download = fileName || "data.geojson"; 

    // document.body.appendChild(link);

    return link;
}

export function responseData(results){
    // console.log(results.features);
    // console.log(MakeGeojsonFromAPI(results))
    Addlayer();
    results.forEach(isiRowPoint);
    results.forEach(isiRowPolygon);
    results.forEach(isiRowPolyline);
}