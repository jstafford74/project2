const sleep = require("util").promisify(setTimeout);
var axios = require("axios");
// const sleep = m => new Promise(r => setTimeout(r, m));
let count = 0;

// (async () => {
//   console.time("Slept for");
//   console.log(count);
//   await sleep(3000);
//   count++;
//   console.timeEnd("Slept for");
//   console.log(count);
// })();

// function sleeep(fn, par) {
//   return new Promise(resolve => {
//     // wait 3s before calling fn(par)
//     setTimeout(() => resolve(fn(par)), 3000);
//   });
// }

const setAsyncTimeout = (cb, timeout = 0) =>
  new Promise(resolve => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });

let pageCount = 1;

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(getLogins, url) {
  await timeout(3000);
  return fn(...args);
}

function getLogins(){> {
  console.log(`Page: ${pageCount}`);
  await setAsyncTimeout(() => {
    const ans = axios.get(
      "https://api.github.com/search/repositories?q=giftastic&page=" + pageCount
    );
  }, 6100);

  console.log(ans.data.total_count);
  pageCount++;
  // loginsAsync();
};

loginsAsync();
