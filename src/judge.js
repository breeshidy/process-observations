class Judge {
  constructor (score, participant) {
    this.score = score;
    this.participant = participant;
  }

  assignScore () {
    const score = this.score;
    const participant = this.participant;
    return { score, participant };
  }
}

module.exports = Judge;
