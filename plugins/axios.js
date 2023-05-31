export default ({ $axios, env }) => {
  $axios.interceptors.request.use(function (config) {
    config.headers.get['Content-Type'] = "application/json";
    return config;
  });
}
