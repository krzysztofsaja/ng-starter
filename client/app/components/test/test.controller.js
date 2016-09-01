class TestController {
  constructor(testService) {
    'ngInject';
    this.name = 'test';
    this.testService = testService;
    this.testList = this.testService.query() || [];
  }
}

export default TestController;
