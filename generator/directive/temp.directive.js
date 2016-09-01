import template from './<%= name %>.html';
import <%= name %>Controller from './<%= name %>.controller';
import './<%= name %>.scss';

class <%= name %>Directive {
  constructor() {
    this.restrict = 'AE';
    this.template = template;
    this.bindToController = {
      test: '='
    };
    this.controller = <%= name %>Controller;
    this.controllerAs = 'ctrl';
  }
  link($scope, element, attrs, ctrl) {
  }
}

export default <%= name %>Directive;
