var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ShayBenchLandCover_2025_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ShayBenchLandCover_2025<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_0.png" /> Forest<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_1.png" /> Woodland<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_2.png" /> Shrubland<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_3.png" /> Cropland<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_4.png" /> Grassland<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_5.png" /> Bareland<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_6.png" /> Wetland<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_7.png" /> Waterbody<br />\
    <img src="styles/legend/ShayBenchLandCover_2025_1_8.png" /> Settlement<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ShayBenchLandCover_2025_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3970720.000000, 772229.805888, 3989700.000000, 784067.363126]
        })
    });
var format_Shay_Bench_2 = new ol.format.GeoJSON();
var features_Shay_Bench_2 = format_Shay_Bench_2.readFeatures(json_Shay_Bench_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shay_Bench_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shay_Bench_2.addFeatures(features_Shay_Bench_2);
var lyr_Shay_Bench_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shay_Bench_2, 
                style: style_Shay_Bench_2,
                popuplayertitle: 'Shay_Bench',
                interactive: true,
                title: '<img src="styles/legend/Shay_Bench_2.png" /> Shay_Bench'
            });
var format_drainage_Network_3 = new ol.format.GeoJSON();
var features_drainage_Network_3 = format_drainage_Network_3.readFeatures(json_drainage_Network_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainage_Network_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainage_Network_3.addFeatures(features_drainage_Network_3);
var lyr_drainage_Network_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainage_Network_3, 
                style: style_drainage_Network_3,
                popuplayertitle: 'drainage_Network',
                interactive: true,
    title: 'drainage_Network<br />\
    <img src="styles/legend/drainage_Network_3_0.png" /> 1<br />\
    <img src="styles/legend/drainage_Network_3_1.png" /> 2<br />\
    <img src="styles/legend/drainage_Network_3_2.png" /> 3<br />\
    <img src="styles/legend/drainage_Network_3_3.png" /> 4<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_ShayBenchLandCover_2025_1.setVisible(true);lyr_Shay_Bench_2.setVisible(true);lyr_drainage_Network_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ShayBenchLandCover_2025_1,lyr_Shay_Bench_2,lyr_drainage_Network_3];
lyr_Shay_Bench_2.set('fieldAliases', {'W_NAME': 'W_NAME', 'Major_W': 'Major_W', 'Z_NAME': 'Z_NAME', 'Micro_W': 'Micro_W', 'R_NAME': 'R_NAME', 'Basin_Name': 'Basin_Name', 'Project_Ph': 'Project_Ph', 'Area_ha': 'Area_ha', 'ECO_NAME': 'ECO_NAME', 'TRAD_ECO': 'TRAD_ECO', 'RAINE_NAME': 'RAINE_NAME', 'SoilLoss_m': 'SoilLoss_m', 'SedlExp_me': 'SedlExp_me', 'Area': 'Area', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'ImplStart': 'ImplStart', 'Micro_wate': 'Micro_wate', 'THH': 'THH', 'MHH': 'MHH', 'FHH': 'FHH', 'GIS_Microw': 'GIS_Microw', 'Image': 'Image', });
lyr_drainage_Network_3.set('fieldAliases', {'ID': 'ID', 'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'ORDER': 'ORDER', 'LENGTH': 'LENGTH', 'MAGNITUDE': 'MAGNITUDE', 'DS_CONT_AR': 'DS_CONT_AR', 'DROP': 'DROP', 'SLOPE': 'SLOPE', 'STRAIGHT_L': 'STRAIGHT_L', 'US_CONT_AR': 'US_CONT_AR', 'WSNO': 'WSNO', 'DOUT_END': 'DOUT_END', 'DOUT_START': 'DOUT_START', 'DOUT_MID': 'DOUT_MID', 'BASINNO': 'BASINNO', 'BASIN': 'BASIN', });
lyr_Shay_Bench_2.set('fieldImages', {'W_NAME': 'TextEdit', 'Major_W': 'TextEdit', 'Z_NAME': 'TextEdit', 'Micro_W': 'TextEdit', 'R_NAME': 'TextEdit', 'Basin_Name': 'TextEdit', 'Project_Ph': 'TextEdit', 'Area_ha': 'TextEdit', 'ECO_NAME': 'TextEdit', 'TRAD_ECO': 'TextEdit', 'RAINE_NAME': 'TextEdit', 'SoilLoss_m': 'TextEdit', 'SedlExp_me': 'TextEdit', 'Area': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'ImplStart': 'DateTime', 'Micro_wate': 'TextEdit', 'THH': 'TextEdit', 'MHH': 'TextEdit', 'FHH': 'TextEdit', 'GIS_Microw': 'TextEdit', 'Image': 'ExternalResource', });
lyr_drainage_Network_3.set('fieldImages', {'ID': 'TextEdit', 'LINKNO': 'TextEdit', 'DSLINKNO': 'TextEdit', 'USLINKNO1': 'TextEdit', 'USLINKNO2': 'TextEdit', 'DSNODEID': 'TextEdit', 'ORDER': 'TextEdit', 'LENGTH': 'TextEdit', 'MAGNITUDE': 'TextEdit', 'DS_CONT_AR': 'TextEdit', 'DROP': 'TextEdit', 'SLOPE': 'TextEdit', 'STRAIGHT_L': 'TextEdit', 'US_CONT_AR': 'TextEdit', 'WSNO': 'TextEdit', 'DOUT_END': 'TextEdit', 'DOUT_START': 'TextEdit', 'DOUT_MID': 'TextEdit', 'BASINNO': 'TextEdit', 'BASIN': 'TextEdit', });
lyr_Shay_Bench_2.set('fieldLabels', {'W_NAME': 'no label', 'Major_W': 'no label', 'Z_NAME': 'no label', 'Micro_W': 'no label', 'R_NAME': 'no label', 'Basin_Name': 'no label', 'Project_Ph': 'no label', 'Area_ha': 'no label', 'ECO_NAME': 'no label', 'TRAD_ECO': 'no label', 'RAINE_NAME': 'no label', 'SoilLoss_m': 'no label', 'SedlExp_me': 'no label', 'Area': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'ImplStart': 'no label', 'Micro_wate': 'no label', 'THH': 'no label', 'MHH': 'no label', 'FHH': 'no label', 'GIS_Microw': 'no label', 'Image': 'ExternalResource', });
lyr_drainage_Network_3.set('fieldLabels', {'ID': 'hidden field', 'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'ORDER': 'hidden field', 'LENGTH': 'hidden field', 'MAGNITUDE': 'hidden field', 'DS_CONT_AR': 'hidden field', 'DROP': 'hidden field', 'SLOPE': 'hidden field', 'STRAIGHT_L': 'hidden field', 'US_CONT_AR': 'hidden field', 'WSNO': 'hidden field', 'DOUT_END': 'hidden field', 'DOUT_START': 'hidden field', 'DOUT_MID': 'hidden field', 'BASINNO': 'hidden field', 'BASIN': 'hidden field', });
lyr_drainage_Network_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});