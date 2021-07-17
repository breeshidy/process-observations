const Judge = require("./judge");
class Score {
  constructor(lowThreshold, highThreshold) {
    this.judges = [];
    this.lowThreshold = lowThreshold;
    this.highThreshold = highThreshold;
  }

  addJudge(score, participant) {
    const judge = new Judge(score, participant);
    score = judge.score;
    participant = judge.participant;
    const result = [score, participant];
    this.judges.push(result);
    return this.judges;
  }


  validateScore() {
    let bool = false
    for (let i = 0; i < this.judges.length; i++) {
      const score = this.judges[i][0];
      if (
        this.judges[i][0] > this.lowThreshold &&
        this.judges[i][0] < this.highThreshold
      ) {
        bool = true;
        return {score, bool};
      } else {
        
        bool = false;
        return {score, bool}
      }
    }
  }

  standardiseScores(){
    const score = this.validateScore()
    // return score.bool
    if (!score.bool){
      if (score.score < this.lowThreshold){
        score.score = this.lowThreshold
      }
      else{
        score.score = this.highThreshold
      }
      return score.score
    }
  }
}


module.exports = Score;
