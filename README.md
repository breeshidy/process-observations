# process-observations

## Requirements

*A competion to judge code - prize with 5 points
*panel of judges
*scores from 1 - 10. 1 very bad -- 10 very good
*standard the scores -- low threshold and high threshold.

 Week 3 Observation Process

| Object  | Properties      | Message             | Output                                |
| :---    |    :----:       |          ---:       |  :---                                 |
| Judge   |  Score          |                     | returns @Int Score                    |
|         |  Participant    |                     | returns @String Name                  |
|         |                 |   @assignScore      | returns @Object of Score and pacipant |
| Score   |  judges         |                     | return @array of judges                |
|         |  low threshold  |                     | return @int of low threshold          |
|         |  high threshold |                     | return @int of high threshold         |
|         |                 |  @validateScores    | return @array of judges                |
|         |                 |  @standardizeScores | return @array of judges                |
