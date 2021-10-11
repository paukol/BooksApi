const formatFullname = require("../formatFullname.js");
const expect = require("chai").expect;

describe("formatFullName", () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it("should return an error if there is no arg", () => {
    expect(formatFullname()).to.equal('Error');
  });
  it("should return <firstName> and <lastName>", () => {
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('Amanda DOE')).to.equal('Amanda Doe');
    expect(formatFullname('AmANDA DOE')).to.equal('Amanda Doe');
  });
  it('should return an error if "fullName" conains only one word', () => {
    expect(formatFullname('Amanda')).to.equal('Error');
  });
  it('should return an error if "fullName" conains more then two words', () => {
    expect(formatFullname('Amanda Doe test')).to.equal('Error');
    expect(formatFullname('Amanda Doe test test test')).to.equal('Error');
  });
});