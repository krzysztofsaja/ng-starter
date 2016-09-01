import config from '../../config';

export default class TestService {
  constructor($resource) {
    'ngInject';
    const testService = $resource(
      config.api.host + config.api.posts,
      {}
    );
    return testService;
  }
}
