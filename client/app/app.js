import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Directives from './directives/directives';
import pl from './assets/i18n/pl';
import en from './assets/i18n/en';

import 'normalize.css';
import './assets/styles/style.scss';

export default angular.module('app', [
  Common,
  Components,
  Directives
])
.config(($locationProvider, $translateProvider, $windowProvider) => {
  'ngInject';
  const navigator = $windowProvider.$get().navigator;
  const lang = navigator.userLanguage || navigator.language;
  const defaultLang = ['pl', 'en'].indexOf(lang) !== -1 ? lang : 'pl';
  $locationProvider.html5Mode(true).hashPrefix('!');
  $translateProvider.translations('pl', pl);
  $translateProvider.translations('en', en);
  $translateProvider.preferredLanguage(defaultLang);
  $translateProvider.fallbackLanguage(defaultLang);
  $translateProvider.useSanitizeValueStrategy(null);
})
.component('app', AppComponent);
