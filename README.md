# plausible-telemetry

A super-simple [Plausible](https://plausible.io) client, geared at application telemetry.

`npm install plausible-telemetry`

```ts
import PlausibleTelemetry from "plausible-telemetry"

const telemetry = new PlausibleTelemetry(
  "telemetry.your-domain.dev",
  "mobile"  // mobile | tablet
            // e.g. for distinguishing between
            // Docker and Native installs.
)

await telemetry.record("started") // will be shown as page view
await telemetry.goal("beta_feature_1 used")
```
