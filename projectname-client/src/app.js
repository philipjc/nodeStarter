import Main from './components/main';

class App {
  constructor(body) {
    this.body = body;
    this.main = new Main(this.body);
  }

  init() {
    this.addEventListener();
    this.main.hitRoute();
    console.log('Loaded changed!');
  }

  addEventListener() {

  }


}

export default App;
