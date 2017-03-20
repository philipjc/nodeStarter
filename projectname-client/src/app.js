import Main from './components/main';
import io from 'socket.io-client';

class App {
  constructor(body) {
    this.body = body;
    this.main = new Main(this.body);
  }

  init() {
    this.addEventListener();
    this.main.hitRoute();
    console.log('Loaded changed!');

    let socket = io('localhost:3000');
    socket.emit('bullshit', 'this is');
  }

  addEventListener() {

  }


}

export default App;
