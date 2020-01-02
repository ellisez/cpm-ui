export default function openURL(url, options) {
  if (window && window.location) {
    if (/^\w+\:\/\//.test(url)) {
      window.location.href = url;
    } else {
      if (!(/^\/\w/.test(url))) {
        url='/'+url;
      }
      window.location.href = `${window.location.protocol}://${window.location.host}${url}`;
    }
  }
}
