import Hub from '../hub.js';

class Main extends Hub {
  constructor(body) {
    super();
    this.body = body;

  }

  hitRoute() {
    // debugger;
    console.log('running hitRoute method');
    const opts = {
      method: 'GET',
      url: `${this.URL}`,
      json: true,
      headers: {}
    };

    this.request(opts, (err, resp, data) => {
      if (err) {
        console.log('error getting route api');
      }
      else {
        console.log('route response', resp, data);
        // this.body.innerHTML = Template.render(data);
      }
    });
  }

}

export default Main;
