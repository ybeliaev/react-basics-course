import * as R from "ramda";

export function makeApiClient(origin) {
  async function fetchJSON(url, options = {}) {
    if (!url.startsWith("http")) {
      url = origin + url;
    }

    options = R.mergeDeepRight(options, {
      headers: {
        Accept: "application/json", // "Accept" почему то кавычки снимаются
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options.body),
    });
    let resp = await fetch(url, options);

    if ((resp.headers.get("content-type") || "").includes("application/json")) {
      try {
        return resp.json();
      } catch (err) {
        throw new Error(`API: Invalid JSON`);
      }
    } else {
      throw new Error(`API: Invalid mime-type`);
    }
  }
  return {
    fetchJSON,
  };
}
