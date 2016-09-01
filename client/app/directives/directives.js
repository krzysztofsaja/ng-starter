import angular from 'angular';
import setLanguage from './setLanguage/setLanguage';

const directivesModule = angular.module('app.directives', [
  setLanguage
])
.name;

export default directivesModule;
