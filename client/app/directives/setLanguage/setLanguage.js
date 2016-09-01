import angular from 'angular';
import setLanguageDirective from './setLanguage.directive';
import setLanguageService from './setLanguage.service';
import angularSanitize from 'angular-sanitize';
import angularTranslate from 'angular-translate';

const setLanguageModule = angular.module('setLanguage', [
  angularTranslate,
  angularSanitize
])
.directive('setLanguage', () => new setLanguageDirective)
.service('setLanguageService', setLanguageService)
.name;

export default setLanguageModule;
