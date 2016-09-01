import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';

import navbarComponent from './navbar.component';
import NavBarService from './navbar.service';

const navbarModule = angular.module('navbar', [
  uiRouter,
  angularTranslate,
  angularSanitize
])
.component('navbar', navbarComponent)
.service('navBarService', NavBarService)
  .name;

export default navbarModule;
