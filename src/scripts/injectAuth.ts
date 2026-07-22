import secrets from '../auth/secrets.json' with { type: 'json' }
import authSettings from '../auth/authSettings.json' with { type: 'json' }

console.log(
  JSON.stringify(
    Object.entries(secrets).reduce(
      // @ts-expect-error TODO: define type
      (a, c) => ((a[c[0]] = { ...a[c[0]], ...c[1] }), a),
      authSettings,
    ),
    null,
    2,
  ),
)
