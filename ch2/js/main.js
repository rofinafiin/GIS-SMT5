import { get } from "https://jscroot.github.io/api/croot.js";
import {responseData} from "./controller/controller.js"
import {URLGeoJson} from "./template/template.js"
import {map} from './config/configpeta.js';
import {onClosePopupClick,onDeleteMarkerClick,onSubmitMarkerClick,onMapClick,onMapPointerMove,disposePopover} from './controller/popup.js';
import {onClick} from 'https://jscroot.github.io/element/croot.js';
import {getAllCoordinates} from './controller/cog.js';

// onClick('popup-closer',onClosePopupClick);
// onClick('insertmarkerbutton',onSubmitMarkerClick);
// onClick('hapusbutton',onDeleteMarkerClick);
// onClick('hitungcogbutton',getAllCoordinates);

map.on('click', onMapClick);
map.on('pointermove', onMapPointerMove);
map.on('movestart', disposePopover);
get(URLGeoJson,responseData);


    //download data point, polygon, dan polyline
    const pointSource = new ol.source.Vector({
        url: URLGeoJson,
        format: new ol.format.GeoJSON()
    });

    //buat layer untuk point, polygon, dan polyline
    const layerpoint = new ol.layer.Vector({
        source: pointSource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: 'blue'
                })
            })
        })
    });

    const polylayer = new ol.layer.Vector({
        source: pointSource,
        style: function (feature) {
            const featureType = feature.getGeometry().getType();
            
           
            if (featureType === 'Polygon') {
                return new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'yellow', 
                        width: 4
                    })
                });
            } else {
                
                return new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'orange', 
                        width: 4
                    })
                });
            }
        }
    });

    map.addLayer(layerpoint);
    map.addLayer(polylayer);

