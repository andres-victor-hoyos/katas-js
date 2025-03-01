function Bitmap() {
  this._primaryBitmap  = new OctetOfOctet();
}

Bitmap.prototype.fromArray = function(arr) {
  this._primaryBitmap = this._primaryBitmap.fromArray(arr);
}

Bitmap.prototype.turnOn = function (de) {
  this._primaryBitmap.turnOn(de);
};

Bitmap.prototype.turnOff = function(de){
  this._primaryBitmap.turnOff(de);
}

Bitmap.prototype.isOn = function(de){
 return this._primaryBitmap.isOn(de);
}

Bitmap.prototype.toArray = function(){
  return this._primaryBitmap.toArray();
}

Bitmap.prototype.toString = function(){
  return this._primaryBitmap.toString();
}

//Octet
const BIT__0x80 = 0b10000000;

function  Octet(octect_init) {
  this._octet = octect_init;
};

Octet.prototype.turnOn = function (b) {
  const onBit = rotate_bits_right(b);
  this._octet |= onBit;
};

Octet.prototype.turnOff = function (b) {
  const onBit = rotate_bits_right(b);
  this._octet ^=  onBit;
};

Octet.prototype.isOn = function (b) {
  const onBit = rotate_bits_right(b);
  return (this._octet & onBit) !== 0;
};

Octet.prototype.toByte = function(){
  return this._octet;
}

Octet.prototype.toString = function(){
  return this._octet.toString(16).padStart(2,0);
}

function rotate_bits_right(b) {
  return BIT__0x80 >> (b - 1);
}

const OCTET_SIZE = 8;

//Octect_of_Octect
function OctetOfOctet() {
  this._dataElements = [];
  for(let i = 0; i < 8; i++){
    this._dataElements[i] = new Octet(0x00);
  }
};

OctetOfOctet.prototype.fromArray = function(arr){
  this._dataElements = [];
  for(let i = 0; i<arr.length; i++){    
    this._dataElements[i] = new Octet(arr[i]);
  }
}

OctetOfOctet.prototype.turnOn = function (de) {
  this._dataElements[_index(de)].turnOn(_bitInOctet(de));
};

OctetOfOctet.prototype.turnOff = function (de) {
  this._dataElements[_index(de)].turnOff(_bitInOctet(de));
};

OctetOfOctet.prototype.isOn = function(de) {
  return this._dataElements[_index(de)].isOn(_bitInOctet(de));
};

OctetOfOctet.prototype.toArray = function(){
  const arr_result = [];
  for(let i=0; i<this._dataElements.length; i++){
    arr_result[i] = this._dataElements[i].toByte();
  }
  return arr_result;
}

OctetOfOctet.prototype.toString = function(){
  let str_result = '';
  for(let i=0; i<this._dataElements.length; i++){
    str_result+=this._dataElements[i].toString();
  }
  return str_result;
}

const _index = function(e) {
  return Math.floor((e - 1) / OCTET_SIZE);
};

function _bitInOctet(de) {
  return (de + _index(de)) % (OCTET_SIZE + 1);
}

export default Bitmap;