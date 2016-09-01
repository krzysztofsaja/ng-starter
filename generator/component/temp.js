import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import <%= name %>Component from './<%= name %>.component';
import <%= name %>Service from './<%= name %>.service';

const <%= name %>Module = angular.module('<%= name %>', [
  angularTranslate,
  angularSanitize,
  uiRouter,
  ngResource
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
  .state('<%= name %>', {
    url: '/<%= name %>',
    component: '<%= name %>'
  });
})
.component('<%= name %>', <%= name %>Component)
.service('<%= name.toLowerCase() %>Service', <%= name %>Service)
.name;

export default <%= name %>Module;
