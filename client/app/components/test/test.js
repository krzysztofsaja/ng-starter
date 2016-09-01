import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';

import testComponent from './test.component';
import testService from './test.service';

const testModule = angular.module('test', [
  uiRouter,
  ngResource,
  angularTranslate,
  angularSanitize
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
  .state('test', {
    url: '/test',
    component: 'test'
  });
})
.component('test', testComponent)
.service('testService', testService)
.name;

export default testModule;
