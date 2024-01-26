class GameManager
{
    constructor()
    {
        this.highscore = 0;
        this.score = 0;
    }

    // Update highscore to score if highscore > score
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;
        }
    }

    // Show score and highscore on screen
    displayScore()
    {
        
    }
}