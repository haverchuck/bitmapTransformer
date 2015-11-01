"use strict";
var palette = require(__dirname +'/lib/palette-translate');
var pixel = require(__dirname + '/lib/pixel-translate');
var transform = require(__dirname + '/lib/transform');



var fs = require('fs');
//var input = require('./input.js')

//header info
var bitmap = fs.readFileSync('bitmap1.bmp');
var format = bitmap.toString('utf-8',0,2);
var size = bitmap.readUInt32LE(2);
var pixelData = bitmap.readUInt32LE(10);
var width = bitmap.readUInt32LE(18);
var height = bitmap.readUInt32LE(22);
var bitsPerPixel = bitmap.readUInt16LE(28);
var numColors = bitmap.readUInt32LE(46);








/*END functions to recreate buffers*/

//RANDOM LOGGING FOR DEBUGGING BEFORE WE HAVE ACTUAL DEBUGGING
function conslog(){
  console.log('size: ' + size);
  console.log('pixelData: ' + pixelData);
  console.log('bitsPerPixel: ' + bitsPerPixel);
  console.log('numColors: ' + numColors);
  console.log('width: ' + width);
  console.log('height: ' + height);
  var colorTable = getColorTable();
  console.log(colorTable);
  var row1 = getRow();
  console.log(row1);
  console.log('first pixel: ' + colorTable[28].b + ' ' + colorTable[28].g + ' '+ colorTable[28].r);
};

// uncomment this to run pixel... currently can't run both prepColorBMP and this simultaneously --> prepPixelBMP();
//prepColorBMP();
pixel.prepBMP(transform.streak);
//console.log(streak(getPixelData()).length);
//console.log(getPixelData().length);
//input.getInput();