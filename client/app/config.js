class Config {
  constructor() {
    this.PORT = 3000;
    this.PORT_API = 9000;
    this.BASE = '/';
    this.HOST_NAME = 'localhost';
    this.DEST_FRONTEND = 'dist';
    this.STYLES_FOLDER = 'client/assets/styles';
    this.BUNDLE_NAME = 'bundle.v1';
    this.CSS_NAME = 'style.v1';
    this.api = {
      host: 'http://jsonplaceholder.typicode.com/',
      posts: 'posts'
    };
  }
}
const config = new Config();
export default config;
