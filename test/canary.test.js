var expect = require("chai").expect;
var getLogins = require("../getLogins");
var getLogUrls = require("../getLogUrls");

describe("canary test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(true).to.be.true;
  });
});

describe("getLogins", function() {
  it("should return the next page and an array of logins", function() {
    expect(getLogins("jeremiah")).to.equal("jrmh");
  });
});;
