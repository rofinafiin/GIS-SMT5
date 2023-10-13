import { get } from "https://jscroot.github.io/api/croot.js";
import { URLGeoJson } from "./template/template.js";
import { MakeGeojsonFromAPI, responseData } from "./controller/controller.js";
import {map} from './config/configpeta.js';
import {onClosePopupClick,onDeleteMarkerClick,onSubmitMarkerClick,onMapClick,onMapPointerMove,disposePopover} from './controller/popup.js';
import {onClick} from 'https://jscroot.github.io/element/croot.js';
import {getAllCoordinates} from './controller/cog.js';


onClick('popup-closer',onClosePopupClick);
onClick('insertmarkerbutton',onSubmitMarkerClick);
onClick('hapusbutton',onDeleteMarkerClick);
onClick('hitungcogbutton',getAllCoordinates);

map.on('click', onMapClick);
map.on('pointermove', onMapPointerMove);
map.on('movestart', disposePopover);
    
get(URLGeoJson,data => {
    responseData(data)
    // let geojson = MakeGeojsonFromAPI(data)
    let link = MakeGeojsonFromAPI(data, "data.json")
    console.log(link)
    // console.log(geojson)
    AddLayerToMAP(link)
}); 

// AddLayerToMAP(URLGeoJson)


    //download data point, polygon, dan polyline
   function AddLayerToMAP(geojson){ 
    const Sourcedata = new ol.source.Vector({
        url: geojson,
        format: new ol.format.GeoJSON(),
      });

    const geojsonFeatureCollection = {
        type: "FeatureCollection",
        features: Sourcedata
    };

    console.log(geojsonFeatureCollection)

    //buat layer untuk point, polygon, dan polyline
    const layerpoint = new ol.layer.Vector({
        source: Sourcedata,
        style: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/icog.png', 
                scale: 0.5, 
                opacity: 1
            })
        })
    });
    
    const polylayer = new ol.layer.Vector({
        source: Sourcedata,
        style: function (feature) {
            const featureType = feature.getGeometry().getType();
            
           
            if (featureType === 'Polygon') {
                return new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'blue', 
                        width: 2
                    })
                });
            } else {
                
                return new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'red', 
                        width: 3
                    })
                });
            }
        }
    });

    map.addLayer(polylayer);
    map.addLayer(layerpoint);}
