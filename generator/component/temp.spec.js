/* eslint-disable */
import <%= upCaseName %>Module from './<%= name %>';
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Component from './<%= name %>.component';
import <%= upCaseName %>Template from './<%= name %>.html';

describe('<%= upCaseName %>', () => {
  let $rootScope, $state, $location, $componentController, $compile, $translate;
  beforeEach(window.module(<%= upCaseName %>Module));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    $translate = $injector.get('$translate');
  }));

  describe('Module', () => {
    it('default component route should be <%= name %>', () => {
      $location.url('/<%= name %>');
      $rootScope.$digest();
      expect($state.current.component).to.eq('<%= name %>');
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = <%= upCaseName %>Component;

    it('includes the intended template',() => {
      expect(component.template).to.equal(<%= upCaseName %>Template);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(<%= upCaseName %>Controller);
    });
  });

  describe('Controller', () => {
    let controller;
    beforeEach(() => {
      controller = $componentController('<%= name %>', {
        $scope: $rootScope.$new()
      });
    });
    it('has a name property', () => {
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    let scope, template;
    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<<%= name %>></<%= name %>>')(scope);
      // scope.$apply();
    });
    it('has property name in template find by regex', () => {
      expect(<%= upCaseName %>Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
    it('has name in template', () => {
      expect(template.find('h1').html()).to.eq('{{ $ctrl.name }}');
    });
  });
});
