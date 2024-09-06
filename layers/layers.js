var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IGEPN_to_2009_1 = new ol.format.GeoJSON();
var features_IGEPN_to_2009_1 = format_IGEPN_to_2009_1.readFeatures(json_IGEPN_to_2009_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGEPN_to_2009_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGEPN_to_2009_1.addFeatures(features_IGEPN_to_2009_1);
var lyr_IGEPN_to_2009_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IGEPN_to_2009_1, 
                style: style_IGEPN_to_2009_1,
                popuplayertitle: "IGEPN_to_2009",
                interactive: true,
    title: 'IGEPN_to_2009<br />\
    <img src="styles/legend/IGEPN_to_2009_1_0.png" /> 3,0 - 4,8<br />\
    <img src="styles/legend/IGEPN_to_2009_1_1.png" /> 4,8 - 6,6<br />\
    <img src="styles/legend/IGEPN_to_2009_1_2.png" /> 6,6 - 8,3<br />'
        });
var format_IGEPN_20102011_2 = new ol.format.GeoJSON();
var features_IGEPN_20102011_2 = format_IGEPN_20102011_2.readFeatures(json_IGEPN_20102011_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGEPN_20102011_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGEPN_20102011_2.addFeatures(features_IGEPN_20102011_2);
var lyr_IGEPN_20102011_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IGEPN_20102011_2, 
                style: style_IGEPN_20102011_2,
                popuplayertitle: "IGEPN_2010-2011",
                interactive: true,
    title: 'IGEPN_2010-2011<br />\
    <img src="styles/legend/IGEPN_20102011_2_0.png" /> 3,0 - 4,0<br />\
    <img src="styles/legend/IGEPN_20102011_2_1.png" /> 4,0 - 5,0<br />\
    <img src="styles/legend/IGEPN_20102011_2_2.png" /> 5,0 - 6,0<br />'
        });
var format_IGEPN_2011_2021_3 = new ol.format.GeoJSON();
var features_IGEPN_2011_2021_3 = format_IGEPN_2011_2021_3.readFeatures(json_IGEPN_2011_2021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGEPN_2011_2021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGEPN_2011_2021_3.addFeatures(features_IGEPN_2011_2021_3);
var lyr_IGEPN_2011_2021_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IGEPN_2011_2021_3, 
                style: style_IGEPN_2011_2021_3,
                popuplayertitle: "IGEPN_2011_2021",
                interactive: true,
    title: 'IGEPN_2011_2021<br />\
    <img src="styles/legend/IGEPN_2011_2021_3_0.png" /> 3,00 - 3,80<br />\
    <img src="styles/legend/IGEPN_2011_2021_3_1.png" /> 3,80 - 5,00<br />\
    <img src="styles/legend/IGEPN_2011_2021_3_2.png" /> 5,00 - 8,00<br />'
        });
var group_INFCARTOGRAFICA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "INF. CARTOGRAFICA"});
var group_INFGEOLOGICA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "INF. GEOLOGICA"});
var group_ESTRUCTURAL = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ESTRUCTURAL"});
var group_SISMICIDAD = new ol.layer.Group({
                                layers: [lyr_IGEPN_to_2009_1,lyr_IGEPN_20102011_2,lyr_IGEPN_2011_2021_3,],
                                fold: "open",
                                title: "SISMICIDAD"});
var group_RASTER = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "RASTER"});
var group_INFTERRITORIAL = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "INF. TERRITORIAL"});

lyr_GoogleSatellite_0.setVisible(true);lyr_IGEPN_to_2009_1.setVisible(true);lyr_IGEPN_20102011_2.setVisible(true);lyr_IGEPN_2011_2021_3.setVisible(true);
var layersList = [group_RASTER,group_SISMICIDAD];
lyr_IGEPN_to_2009_1.set('fieldAliases', {'ID': 'ID', 'Fecha': 'Fecha', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Profundida': 'Profundida', 'Mw': 'Mw', 'AA': 'AA', 'Mes': 'Mes', 'Dia': 'Dia', 'Hora': 'Hora', 'Minuto': 'Minuto', 'Segundo': 'Segundo', 'Catalogo': 'Catalogo', 'Fuente': 'Fuente', });
lyr_IGEPN_20102011_2.set('fieldAliases', {'Catalogo': 'Catalogo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Profundida': 'Profundida', 'Magnitud': 'Magnitud', 'Tipo': 'Tipo', 'Fecha': 'Fecha', 'Time': 'Time', });
lyr_IGEPN_2011_2021_3.set('fieldAliases', {'date_': 'date_', 'time_value': 'time_value', 'latitude_v': 'latitude_v', 'longitude_': 'longitude_', 'depth_valu': 'depth_valu', 'magnitude_': 'magnitude_', 'quality_us': 'quality_us', 'quality__1': 'quality__1', 'quality_st': 'quality_st', 'quality_az': 'quality_az', 'quality_ma': 'quality_ma', 'quality_mi': 'quality_mi', 'Date': 'Date', });
lyr_IGEPN_to_2009_1.set('fieldImages', {'ID': 'TextEdit', 'Fecha': 'DateTime', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Profundida': 'TextEdit', 'Mw': 'TextEdit', 'AA': 'Range', 'Mes': 'Range', 'Dia': 'Range', 'Hora': 'Range', 'Minuto': 'Range', 'Segundo': 'TextEdit', 'Catalogo': 'TextEdit', 'Fuente': 'TextEdit', });
lyr_IGEPN_20102011_2.set('fieldImages', {'Catalogo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Profundida': 'TextEdit', 'Magnitud': 'TextEdit', 'Tipo': 'TextEdit', 'Fecha': 'DateTime', 'Time': 'TextEdit', });
lyr_IGEPN_2011_2021_3.set('fieldImages', {'date_': 'DateTime', 'time_value': 'TextEdit', 'latitude_v': 'TextEdit', 'longitude_': 'TextEdit', 'depth_valu': 'TextEdit', 'magnitude_': 'TextEdit', 'quality_us': 'TextEdit', 'quality__1': 'TextEdit', 'quality_st': 'TextEdit', 'quality_az': 'TextEdit', 'quality_ma': 'TextEdit', 'quality_mi': 'TextEdit', 'Date': 'TextEdit', });
lyr_IGEPN_to_2009_1.set('fieldLabels', {'ID': 'no label', 'Fecha': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Profundida': 'no label', 'Mw': 'no label', 'AA': 'no label', 'Mes': 'no label', 'Dia': 'no label', 'Hora': 'no label', 'Minuto': 'no label', 'Segundo': 'no label', 'Catalogo': 'no label', 'Fuente': 'no label', });
lyr_IGEPN_20102011_2.set('fieldLabels', {'Catalogo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Profundida': 'no label', 'Magnitud': 'no label', 'Tipo': 'no label', 'Fecha': 'no label', 'Time': 'no label', });
lyr_IGEPN_2011_2021_3.set('fieldLabels', {'date_': 'no label', 'time_value': 'no label', 'latitude_v': 'no label', 'longitude_': 'no label', 'depth_valu': 'no label', 'magnitude_': 'no label', 'quality_us': 'no label', 'quality__1': 'no label', 'quality_st': 'no label', 'quality_az': 'no label', 'quality_ma': 'no label', 'quality_mi': 'no label', 'Date': 'no label', });
lyr_IGEPN_2011_2021_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});