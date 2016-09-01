class <%= upCaseName %>Controller {
  constructor(<%= name %>Service) {
    'ngInject';
    this.<%= name %>Service = <%= name %>Service;
    this.name = '<%= name %>';
  }
}

export default <%= upCaseName %>Controller;
