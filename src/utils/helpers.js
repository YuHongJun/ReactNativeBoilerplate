// @flow

/**
 * Construct URL based on provided URL and possible GET parameter.
 * @param baseUrl
 * @param params
 * @returns {string}
 */
export const constructUrlGetParameters = (baseUrl: string, params: Object) => {
  const result = Object.keys(params).map(function(key) {
    if (params[key]) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }
  })

  const queryString = result.length ? `?${result.join('&')}` : ''
  return `${baseUrl}${queryString}`
}
