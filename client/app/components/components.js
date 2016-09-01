import angular from 'angular';
import Home from './home/home';
import Test from './test/test';

const componentModule = angular.module('app.components', [
  Home,
  Test
])
.name;

export default componentModule;
