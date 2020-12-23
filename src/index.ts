import fetch from "cross-fetch";

type ScreenWidth = "mobile" | "tablet";

function getPixels(screenWidth: ScreenWidth): number {
  switch (screenWidth) {
    case "mobile":
      return 500;
    case "tablet":
      return 900;
  }
}

export default class PlausibleTelemetry {
  constructor(public domain: string, public screenWidth: ScreenWidth) {}

  public async record(path: string, event = "pageview") {
    try {
      await fetch("https://plausible.io/api/event", {
        method: "POST",
        body: JSON.stringify({
          name: event,
          url: `https://${this.domain}/${path}`,
          domain: this.domain,
          screen_width: getPixels(this.screenWidth),
        }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  public async goal(name: string) {
    await this.record("", name);
  }
}
