import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

//import {AuthorizeStep} from './auth';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      //config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
      config.map([
        //{ route: 'sock-channels', moduleId: 'sock-channels', auth: true,  nav: true, title: "SockJS Channel example"},
        { route: 'sock-channels', moduleId: 'sock-channels', nav: true, title: "SockJS Channel example"},
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'flickr',       nav: true },
        //{ route: 'login', moduleId: 'login', nav: true},
        { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}
