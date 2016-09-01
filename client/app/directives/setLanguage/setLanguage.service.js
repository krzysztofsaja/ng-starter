export default class SetLanguageService {
  constructor($translate) {
    'ngInject';
    this.currentLang = 'pl';
    this.$translate = $translate;
  }
  setLang(lang) {
    this.currentLang = lang;
    this.$translate.use(this.currentLang);
  }

  getLang() {
    return this.currentLang;
  }
}
