// Un petit bonus vraiment pas cool mais bon
require("colors");
const stdin = process.openStdin();

class Shape {
    constructor(width, heigth, type) {
        this.width = width;
        this.height = heigth;
        this.type = type;
    }
    setChar({ opt1, opt2, opt3 }) {
        if (opt1)
            return 'x';
        if (this.type === 2 && opt2)
            return 'x';
        if (this.type === 3 && opt3)
            return 'x';
        return '-';
    }
    Draw() {
        let char = "";
        let i, j;
        for (i = 1; i <= this.height; i++) {
            for (j = 1; j <= this.width; j++) {
                char += this.setChar(
                    {
                        opt1: i === 1 || i === this.height || j === this.width || j === 1,
                        opt2: i === j,
                        opt3: i === j || j === this.height - i + 1
                    },
                    this.type
                );
            }
            char += "\n";
        }
        return `${char}\n> Hacker be like <`;
    }
}

const log = message => console.log(message);

log("Method 1: 1\nMethod 2: 2\nMethod 3: 3\nLeave: 4");
stdin.addListener("data", input => {
  input = parseInt(input);
  if (input <= 3) 
      log(new Shape(20, 20, input).Draw().green);
  else if (input === 4)
      log(`♪ Goodbye my lover.\nGoodbye my friend.\nYou have been the one.\nYou have been the one for me. ♪`.magenta) + process.exit(0);
  else
      log(`Wtf my dude? There is only 4 options come on.. shouldn't be that hard to choose :@`.red);
});
