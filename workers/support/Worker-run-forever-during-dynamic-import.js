import('./Worker-run-forever.js')
  .then((r) => postMessage('resolved: ' + r),
        (e) => postMessage('rejected: ' + e));
