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