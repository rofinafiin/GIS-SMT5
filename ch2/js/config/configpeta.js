import Map from 'https://cdn.skypack.dev/ol/Map.js';
import View from 'https://cdn.skypack.dev/ol/View.js';
import TileLayer from 'https://cdn.skypack.dev/ol/layer/Tile.js';
import XYZ from 'https://cdn.skypack.dev/ol/source/XYZ.js';
import OSM from 'https://cdn.skypack.dev/ol/source/OSM.js';
import {fromLonLat} from 'https://cdn.skypack.dev/ol/proj.js';
import Overlay from 'https://cdn.skypack.dev/ol/Overlay.js';
import {container} from 'https://jscroot.github.io/element/croot.js';
import { URLGeoJson } from '../template/template.js';
export let idmarker = {id:1};


export const overlay = new Overlay({
    element: container('popup'),
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });

export const popupinfo = new Overlay({
    element: container('popupinfo'),
    autoPan: {
      animation: {
        duration: 250,
      },
    },
});

export let map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([107.6202256201097,
                -6.897701152405389]),
            zoom: 15
        })
});