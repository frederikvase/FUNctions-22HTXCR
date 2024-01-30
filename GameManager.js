<<<<<<< Updated upstream
class GameManager
{
    constructor(enemyMultiplier = 1.5, enemiesFirstRound = 10)
    {
        this.highscore = 0;
        this.score = 0;
        this.level = 0;

        this.damage = 1;
        this.attackSpeed = 1;
        this.penetration = 1;
        this.capacity = 1;


        this.enemyMultiplier = enemyMultiplier;
        this.enemiesFirstRound = enemiesFirstRound;
    }

    // Update highscore to score if highscore > score
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;
        }
    }

    // Show info on screen
    display(x = 0, y = 0)
    {
        // Score

        // Level up!?
    }

    // Add amount to score
    addToScore(amount)
    {
        this.score = this.score + amount;
    }

    // Call this when all enemies are dead
    levelUp()
    {
        this.level = this.level + 1;
    }

    // Get amount of enemies to spawn in this level
    getEnemiesToSpawn()
    {
        // Linear scaling (this should be changed to something better in the future so scaling uses more parameters than just amount of enemies)
        return this.enemyMultiplier * this.level + this.enemiesFirstRound;
    }

    // Use this function to track the increase in bullet damage from power-ups
    damageIncrease()
    {
        this.damage = this.damage + 1;
        if (this.damage > 3)
        {
           this.damage = 3; 
        }
    }

    // Use this function to track the increase in attack speed from power-ups
    attackSpeedIncrease()
    {
        this.attackSpeed = this.attackSpeed + 1;
        if (this.attackSpeed > 3)
        {
           this.attackSpeed = 3; 
        }
    }

    // Use this function to track the increase in how many enemies bullets can penetrate acquired from power-ups
    bulletPenetrationIncrease()
    {
        this.penetration = this.penetration + 1;
        if (this.penetration > 3)
        {
           this.penetration = 3; 
        }
    }

    // Use this function to track the increase in bullet capacity between reloads from power-ups
    ammoCapacityIncrease()
    {
        this.capacity = this.capacity + 1;
        if (this.capacity > 5)
        {
           this.capacity = 5; 
        }
    }
}
=======
class GameManager
{
    constructor(font = undefined, enemyMultiplier = 1.5, enemiesFirstRound = 10)
    {
        this.highscore = 0;
        this.score = 0;
        this.level = 0;

        this.damage = 1;
        this.attackSpeed = 1;
        this.penetration = 1;
        this.capacity = 1;

        this.enemyMultiplier = enemyMultiplier;
        this.enemiesFirstRound = enemiesFirstRound;

        this.font = font;
    }

    // Update highscore to score if highscore > score
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;
        }
    }

    // Show info on screen
    display(x = 0, y = 0)
    {
        push();

        // Style
        textAlign(LEFT, TOP)
        fill(0, 255);

        // Bounding box for score text
        // Calculate box size from text width and text ascent
        
        if (this.font != undefined) // Set font if a non default font is defined
        {
            textFont(this.font);
        }
        
        // Score
        text("Highscore: " + this.highscore, x, y);
        text("Score: " + this.score, x, y + textAscent());

        // Level up!?

        pop();
    }

    // Add amount to score
    addToScore(amount)
    {
        this.score = this.score + amount;
    }

    // Call this when all enemies are dead
    levelUp()
    {
        this.level = this.level + 1;
    }

    // Get amount of enemies to spawn in this level
    getEnemiesToSpawn()
    {
        // Linear scaling (this should be changed to something better in the future so scaling uses more parameters than just amount of enemies)
        return this.enemyMultiplier * this.level + this.enemiesFirstRound;
    }

    // Use this function to track the increase in bullet damage from power-ups
    damageIncrease()
    {
        this.damage = this.damage + 1;
        if (this.damage > 3)
        {
           this.damage = 3; 
        }
    }

    // Use this function to track the increase in attack speed from power-ups
    attackSpeedIncrease()
    {
        this.attackSpeed = this.attackSpeed + 1;
        if (this.attackSpeed > 3)
        {
           this.attackSpeed = 3; 
        }
    }

    // Use this function to track the increase in how many enemies bullets can penetrate acquired from power-ups
    bulletPenetrationIncrease()
    {
        this.penetration = this.penetration + 1;
        if (this.penetration > 3)
        {
           this.penetration = 3; 
        }
    }

    // Use this function to track the increase in bullet capacity between reloads from power-ups
    ammoCapacityIncrease()
    {
        this.capacity = this.capacity + 1;
        if (this.capacity > 5)
        {
           this.capacity = 5; 
        }
    }
}

class textBox
{
    constructor(fgR = 255, fgG = 255, fgB = 255, fgA = 255, bgR = 0, bgG = 0, bgB = 0, bgA = 255, text = [])
    {
        this.text = text;

        // Foreground color
        this.fgR = fgR;
        this.fgG = fgG;
        this.fgB = fgB;
        this.fgA = fgA;

        // Background color
        this.bgR = bgR;
        this.bgG = bgG;
        this.bgB = bgB;
        this.bgA = bgA;

        // Size
        this.width;
        this.height;
        this.calculateSize();
    }

    updateText(newText)
    {
        this.text = newText;
        this.calculateSize();
    }

    updateSize()
    {
        // Calculate width
        // Get longest string in the text array (not done with this)
        this.longestString = this.text.reduce(
            (lastString, currentString) => {
                if (lastString.length) {
                    
                }
            }
        )

        // Calculate height
        this.height = textAscent() * this.text.length;
    }

    display(x = 0, y = 0) // Needs testing
    {
        push();
        
        // Draw box
        noStroke();
        fill(this.bgR, this.bgG, this.bgB, this.bgA);

        rect(this.x, this.y, this.width, this.height);

        // Draw text
        fill(this.fgR, this.fgG, this.fgB, this.fgA);
        textAlign(LEFT, TOP);

        for (var line = 0; line < this.text.length; line = line + 1)
        {
            text(this.text[line], x, y + textAscent() * line);
        }

        pop();
    }
}
>>>>>>> Stashed changes
