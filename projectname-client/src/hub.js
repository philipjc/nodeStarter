import TinyEmitter from 'tiny-emitter';
import request from 'browser-request';

class Hub extends TinyEmitter {
  constructor() {
    super();
    this.request = request;
    this.URL = 'http://localhost:3000';
  }

}

export default Hub;


// request is a module to make http request.
// By adding to Hub, which we extend to make other parts of the app
// we allways have access to request.

// tiny-emitter is an event system to transmit events across the app
