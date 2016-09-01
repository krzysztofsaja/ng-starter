import angular from 'angular';
import angularTouch from 'angular-touch';
import angularAnimate from 'angular-animate';
import angularUiBootstrap from 'angular-ui-bootstrap';
import Navbar from './navbar/navbar';

const commonModule = angular.module('app.common', [
  angularAnimate,
  angularTouch,
  angularUiBootstrap,
  Navbar
])
.name;

export default commonModule;
