const Judge = require("../src/judge");
describe("Testing The Properties of the Judge Class", function () {
  it("Does this class contain a score property", function () {
    const judge = new Judge(5, "Test");
    const result = judge.score;
    expect(result).toEqual(5);
  });

  it("Does this class contain a participant property", function () {
    const judge = new Judge(0, "Betty");
    const result = judge.participant;
    expect(result).toEqual("Betty");
  });
});

describe("Testing the functions of the Judge Class", function () {
  it("Does this assign function return a score and a participant", function () {
    const judge = new Judge(5, "Betty");
    const result = judge.assignScore();
    expect(result).toEqual({ score: 5, participant: "Betty" });
  });

});
