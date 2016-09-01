import config from '../../config';

export default class <%= upCaseName %>Service {
  constructor($resource) {
    'ngInject';
    const <%= upCaseName.toLowerCase() %>Service = $resource(
      config.api.host + config.api.posts,
      {}
    );
    return <%= upCaseName.toLowerCase() %>Service;
  }
}
