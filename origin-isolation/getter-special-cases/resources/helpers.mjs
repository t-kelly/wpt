import { waitForIframe } from "../../resources/helpers.mjs";

/**
 * Inserts an iframe, not specialized for origin-isolation testing, pointing to
 * a custom URL. This is just a wrapper to remove some boilerplate.
 * @param {string} src - The src="" value for the iframe
 */
export async function insertCustomIframe(src) {
  const iframe = document.createElement("iframe");
  iframe.src = src;

  const waitPromise = waitForIframe(iframe);
  document.body.append(iframe);
  await waitPromise;

  return iframe;
}

/**
 * This is the part of send-origin-isolation-header.py that allows
 * us to reuse testGetter.
 */
export const testSupportScript = `
  <script>
  window.onmessage = () => {
    parent.postMessage(self.originIsolated, "*");
  };
  </script>
`;
