import template from './setLanguage.html';
import './setLanguage.scss';

class setLanguageDirective {
  constructor() {
    this.restrict = 'A';
    this.template = template;
  }

  // You need to inject dependency into controller in ES6 class
  controller($scope, $state, setLanguageService) {
    'ngInject';
    $scope.state = $state;
    $scope.isRightMenuOpen = false;
    $scope.currentLang = 'pl';
    $scope.changeLanguage = (lang) => {
      setLanguageService.setLang(lang);
      $scope.currentLang = setLanguageService.getLang();
    };
  }
  link($scope, element, attrs) {
  }
}

export default setLanguageDirective;
