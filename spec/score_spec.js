const Score = require("../src/score");

describe("Testing the properties of the Score Class", function () {
  it("Does this class contain a low threshold property", function () {
    const score = new Score(2, 8);
    const result = score.lowThreshold;
    expect(result).toEqual(2);
  });

  it("Does this class contain a high threshold property", function () {
    const score = new Score(2, 8);
    const result = score.highThreshold;
    expect(result).toEqual(8);
  });
});

describe("Testing the Functions of the Score Class", function () {
  it("Does this class add an array of judges", function () {
    const score = new Score(2, 8);
    const add = score.addJudge(5, "Betty");
    const add2 = score.addJudge(5, "Rotty");
    const expected = [
      [5, "Betty"],
      [5, "Rotty"],
    ];
    add
    expect(add2).toEqual(expected);
  });

  it("Does this class validate the scores to true", function () {
    const score = new Score(2, 8);
    const add = score.addJudge(5, "Betty");
    const result = score.validateScore();
    expect(result.bool).toEqual(true);
  });

    it("Does this class validate the scores to false", function () {
      const score = new Score(2, 8);
      const add = score.addJudge(1, "Betty");
      const result = score.validateScore();
      expect(result.bool).toEqual(false);
    });

      it("Does this class standardise the scores", function () {
        const score = new Score(2, 8);
        const add = score.addJudge(1, "Betty");
        const result = score.standardiseScores();
        expect(result).toEqual(2);
      });
});
