import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';

const homeModule = angular.module('home', [
  uiRouter,
  angularTranslate,
  angularSanitize
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})
.component('home', homeComponent)
.name;

export default homeModule;
