export default ({ $axios, env }) => {
  // $axios.onRequest(config => {
  //   $axios.defaults.headers.get['Content-Type'] = 'application/json';
  // });

  $axios.interceptors.request.use(function (config) {
    config.headers.get['Content-Type'] = "application/json";
    return config;
  });
}
