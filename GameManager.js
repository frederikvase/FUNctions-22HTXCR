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

        this.scoreBox = new TextBox(
            ["Highscore: " + this.highscore, "Score" + this.score], this.font, 3, 255, 255, 255, 255, 0, 0, 0, 150
        );

        // Initialize undefined localStorage data
        if (typeof (Storage) !== "undefined") 
        {
            if (!localStorage.highscore)
            {
                localStorage.highscore = JSON.stringify();
            }
        }
        
        this.loadHighscore();
    }

    // Update highscore to score if highscore > score
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;

            // Save highsore
            this.saveHighscore();
        }
    }

    // Save current highscore to localstorage
    saveHighscore()
    {
        localStorage.highscore = JSON.stringify(this.highscore);
    }

    // Load current highscore from localstorage
    loadHighscore()
    {
        this.highscore = JSON.parse(localStorage.highscore);
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
        this.scoreBox.setText(["Highscore: " + this.highscore, "Score: " + this.score]);
        this.scoreBox.display(0, 0);

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
        if(this.level<=4)
        {
            // Linear scaling with a bit of randomness to make the game less repetative
            return abs(this.enemyMultiplier * this.level * 5 + random(0,7) + this.enemiesFirstRound)
        }
        if(this.level<=7)
        {
             // same as level 0 to 4 with linear scaling but with bigger scaling
            return abs(this.enemyMultiplier * this.level * 7 + random(0,7)+ this.enemiesFirstRound)
        }

        //can be extended as needed just change the if statement for more levels incluted or make more


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

class TextBox
{
    /*
    Autoscaling customizable textbox
    text requires an array of strings
    font defaults to undefined
    */
    constructor(text = [], font = undefined, margin = 3, fgR = 255, fgG = 255, fgB = 255, fgA = 255, bgR = 0, bgG = 0, bgB = 0, bgA = 255)
    {
        this.text = text;

        this.font = font;
        this.margin = margin

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

        // This function is used to know if size should be updated
        this.textUpdated = true;
    }

    // Set new text for the textbox. newText has to be an array of strings.
    setText(newText)
    {
        this.text = newText;
        this.textUpdated = true;
    }

    // Will update the size of the boundingbox for the textbox based on textsize (Do not call this function from outside the object)
    updateSize()
    {
        // Calculate width

        // Get longest string in the text array
        this.longestString = this.text.reduce(
            (lastString, currentString) => {
                if (lastString.length < currentString.length)
                {
                    return currentString;
                }
                else
                {
                    return lastString;
                }
            },
            ""
        )
        this.width = textWidth(this.longestString);
        
        // Calculate height
        this.height = textAscent() * this.text.length;

        this.textUpdated = false;
    }

    // Display the textbox on canvas
    display(x = 0, y = 0)
    {
        push();

        // Set style and size
        if (this.font != undefined) // Set font if a non default font is defined
        {
            textFont(this.font);
        }
        if (this.textUpdated == true)
        {
            this.updateSize();
        }
        textAlign(LEFT, TOP);
        noStroke();

        // Draw box
        fill(this.bgR, this.bgG, this.bgB, this.bgA);
        rect(x, y, this.width + this.margin * 2, this.height + this.margin * 2);

        // Draw text
        fill(this.fgR, this.fgG, this.fgB, this.fgA);
        for (var line = 0; line < this.text.length; line = line + 1)
        {
            text(this.text[line], x + this.margin, y + textAscent() * line + this.margin);
        }

        pop();
    }
}