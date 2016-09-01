/* eslint-disable */
import TestModule from './test';
import TestController from './test.controller';
import TestComponent from './test.component';
import TestTemplate from './test.html';

let $rootScope, $state, $location, $componentController, $compile, $translate;

describe('Test', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TestModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    $translate = $injector.get('$translate');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    let controller;
    beforeEach(() => {
      controller = $componentController('test', {
        $scope: $rootScope.$new()
      });
    });
    it('has a name property', () => {
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(TestTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TestComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TestTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TestController);
      });
  });
});
