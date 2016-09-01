import angular from 'angular';
import <%= name %>Directive from './<%= name %>.directive';
import <%= name %>Service from './<%= name %>.service';

const <%= name %>Module = angular.module('<%= name %>', [])
.directive('<%= name %>', () => new <%= name %>Directive)
.service('<%= name %>Service', <%= name %>Service)
.name;

export default <%= name %>Module;
