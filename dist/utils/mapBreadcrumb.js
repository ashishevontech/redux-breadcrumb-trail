'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapBreadcrumb;
function mapBreadcrumb() {
  var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var path = route.path,
      indexRoute = route.indexRoute,
      ignoreParams = route.ignoreParams;
  var _route$breadcrumb = route.breadcrumb,
      breadcrumb = _route$breadcrumb === undefined ? indexRoute && indexRoute.breadcrumb || 'Home' : _route$breadcrumb,
      _route$breadcrumbKey = route.breadcrumbKey,
      breadcrumbKey = _route$breadcrumbKey === undefined ? path || indexRoute && (indexRoute.breadcrumbKey || indexRoute.path) || '/' : _route$breadcrumbKey,
      _route$url = route.url,
      url = _route$url === undefined ? '' + (location.pathname || '') + (location.search || '') || '/' : _route$url;


  return {
    component: breadcrumb,
    breadcrumbKey: breadcrumbKey,
    url: url,
    location: location,
    params: ignoreParams ? {} : params,
    current: true
  };
}