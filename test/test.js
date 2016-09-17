var sex = require("./../app.js");
var should = require("should");

describe("Sex, genders, and asexuality unicode icons", function() {
    it("Male unicode icon", function () {
        ("♂").should.be.exactly(sex.male);
    })
    it("Female unicode icon", function() {
        ("♀").should.be.exactly(sex.female);
    })
    it("Transgender unicode icon", function() {
        ("⚦").should.be.exactly(sex.transgender);
    })
    it("Neuter unicode icon", function() {
        ("⚲").should.be.exactly(sex.neuter);
    })
    it("Asexuality unicode icon", function() {
        ('⚪').should.be.exactly(sex.asexuality)
    })
})
