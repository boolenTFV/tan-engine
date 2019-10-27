

var _canvas, _script, _execMiddleware
var _labels; // labels for goto
var _state = {
  block: 0, //current game block
  command: 0, // current command
  isRuning: false, // is engine runing 
}

/**
 * Execute script row
 * @TODO implement
 */
function _exec(row){

}

/**
 * Get next command to execute
 * @TODO implement
 */
function _getNextCommand(){

}

/**
 * Game loop
 * @todo implement
 */
async function _execLoop(){

}

/**
 * Engine class
 * @class
 */
class TanEngine{

  /**
   * TanEngine otpions
   * 
   * @typedef {Object} TanEngine~options
   */
  constructor({
    canvas,
    script, 
    execMiddleware
  }){
    if(canvas instanceof HTMLImageElement){
      _canvas
    } else {throw "param canvas should be a canvas"};

    if(Array.isArray(script)){
      _script = script;
    } else {throw "Param script should be an array"};

    if(Array.isArray(execMiddleware)){
      _execMiddleware = execMiddleware;;
    } else {throw "execMiddleware should be an array"};
  }

  /**
   * Start script executing
   * @todo implement
   */
  start(){
    _state.isRuning = true;
  }

  /**
   * Pause script executing
   * @todo implement
   */
  pause(){
    _state.isRuning = false;
  }

}

/**
 * TanEngine options.
 * @typedef {Object} TanEngine~options
 * @property {Object} canvas - Canvas for novel graphic drawing.
 * @property {Object[]} script - Game script.
 * @property {Object[]} execMiddleware - middleware for command exec
 */

 export default TanEngine;