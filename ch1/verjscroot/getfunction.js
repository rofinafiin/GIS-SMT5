import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "https://asia-southeast2-gis-project-401902.cloudfunctions.net/postgeo";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#TYPE#</td>
<td>#NAME#</td>
<td>#KORDINAT#</td>
`

export function responseData(results){
    // console.log(results.features);
    // Addlayer()
    results.features.forEach(isiRowPoint);
    results.features.forEach(isiRowPolygon);
    results.features.forEach(isiRowPolyline);
}

export function isiRowPoint(value){
    if (value.geometry.type === "Point") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("lokasi",tableTag,tableRowClass,content);
    }
}

export function isiRowPolygon(value){
    if (value.geometry.type === "Polygon") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("polygon",tableTag,tableRowClass,content);
    }
}

export function isiRowPolyline(value){
    if (value.geometry.type === "LineString") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("line",tableTag,tableRowClass,content);
    }
}

export function Addlayer() {

    function showAlertOnEveryClick() {
        alert("IIIIHHH KAMU COPY PUNYA NYA ROFI YAAAAAA");
      }
    function getCurrentURL() {
        const currentURL = window.location.href;
        return currentURL;
      }
      
      const currentURL = getCurrentURL();
      console.log(currentURL);
    const allowedDomain = ["https://rofinafiin.github.io/GIS-SMT5/ch3/index.html", "https://rofinafiin.github.io/GIS-SMT5/ch2/index.html", "https://rofinafiin.github.io/GIS-SMT5/ch1/index.html", "https://rofinafiin.github.io/GIS-SMT5/ch4/index.html", "https://rofinafiin.github.io/GIS-SMT5/ch4/", "https://rofinafiin.github.io/GIS-SMT5/ch3/", "https://rofinafiin.github.io/GIS-SMT5/ch2/", "https://rofinafiin.github.io/GIS-SMT5/ch1/", "https://rofinafiin.github.io/GIS-SMT5/"];
  
    if (!currentURL.includes(allowedDomain)) {
        showAlertOnEveryClick();
    }
  }