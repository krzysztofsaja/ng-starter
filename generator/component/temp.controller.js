class <%= upCaseName %>Controller {
  constructor(<%= name %>Service) {
    'ngInject';
    this.<%= name %>Service = <%= name %>Service;
    this.name = '<%= name %>';
    this.<%= name %>List = this.<%= name %>Service.query() || [];
  }
}

export default <%= upCaseName %>Controller;
