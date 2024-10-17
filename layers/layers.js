var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1 = format_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1.readFeatures(json_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1.addFeatures(features_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1);
var lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1, 
                style: style_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "PETA PERSEBARAN RUMAH SAKIT DI CIMAHI — ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1.png" /> PETA PERSEBARAN RUMAH SAKIT DI CIMAHI — ADMINISTRASIDESA_AR_25K'
            });
var format_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2 = new ol.format.GeoJSON();
var features_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2 = format_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2.readFeatures(json_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2.addFeatures(features_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2);
var lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2, 
                style: style_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2,
                popuplayertitle: "PETA PERSEBARAN RUMAH SAKIT DI CIMAHI — ADMINISTRASI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2.png" /> PETA PERSEBARAN RUMAH SAKIT DI CIMAHI — ADMINISTRASI_LN_25K'
            });
var format_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3 = new ol.format.GeoJSON();
var features_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3 = format_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3.readFeatures(json_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3.addFeatures(features_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3);
var lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3, 
                style: style_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3,
                popuplayertitle: "PETA PERSEBARAN RUMAH SAKIT DI CIMAHI — JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3.png" /> PETA PERSEBARAN RUMAH SAKIT DI CIMAHI — JALAN_LN_25K'
            });
var format_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4 = new ol.format.GeoJSON();
var features_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4 = format_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4.readFeatures(json_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4.addFeatures(features_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4);
var lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4, 
                style: style_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4,
                popuplayertitle: "PETA PERSEBARAN RUMAH SAKIT DI CIMAHI — KESEHATAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4.png" /> PETA PERSEBARAN RUMAH SAKIT DI CIMAHI — KESEHATAN_PT_25K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2.setVisible(true);lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3.setVisible(true);lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1,lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2,lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3,lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4];
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'KARKTR': 'Range', 'STSBTS': 'Range', 'FCODE': 'TextEdit', 'KELAS': 'Range', 'UUPP': 'TextEdit', 'LOKASI': 'Range', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'Range', 'PJGBTS': 'TextEdit', 'KLBADM': 'Range', 'TIPLOK': 'Range', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'Range', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIADMINISTRASI_LN_25K_2.set('fieldLabels', {'OBJECTID': 'no label', 'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIJALAN_LN_25K_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_PETAPERSEBARANRUMAHSAKITDICIMAHIKESEHATAN_PT_25K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});