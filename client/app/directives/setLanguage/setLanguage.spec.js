/* eslint-disable */
import SetLanguageModule from './setLanguage';
import SetLanguageTemplate from './setLanguage.html';

describe('SetLanguage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SetLanguageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has currentLang in template', () => {
      expect(SetLanguageTemplate).to.match(/currentLang/g);
    });
  });
});
