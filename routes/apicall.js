// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// This seeds the databse and only needs to be run once...


async function getLogins(urlArr, loginArr) {
  urlArr.forEach(it => {
    console.log(urlArr);
    const ans = fetchJson(it).then(sleep(6100));
    ans.data.items.forEach(itm => loginArr.push({ login: itm.owner.login }));
  });
  return page++, loginArr;
}

function getLogUrls(baseUrl, pagemax, arr) {
  for (i = 0; i < pagemax; i++) {
    const newUrl = baseUrl + "&page=" + i;
    arr.push(newUrl);
  }
  return arr;
}
