export let URLGeoJson = "https://us-central1-gis-project-401902.cloudfunctions.net/GIS-Project";
export let urlPostGCF = "https://asia-southeast2-gis-project-401902.cloudfunctions.net/PostCoordinate-GIS";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`