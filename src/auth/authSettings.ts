import oidcConfig from './authSettings.json' with { type: 'json' }

export const authSettings = {
  ...oidcConfig.google,

  redirect_uri: location.origin + location.pathname,
  post_logout_redirect_uri: location.origin + location.pathname,
  response_type: 'code',
  scope: 'openid email profile',
  response_mode: 'query' as 'query' | 'fragment' | undefined,
  filterProtocolClaims: true,
}
