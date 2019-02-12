// Un petit bonus vraiment pas cool mais bon
require("colors");
const stdin = process.openStdin();

const logStuff = message => {
    console.log(message);
};

const setChar = (n, m, i, j, type) =>
    ({
        1: i === 1 || i === n || j === 1 || j === m ? "x" : "-",
        2:
            i === 1 || i === n || j === m || j === m || i === j || j === 1
                ? "x"
                : "-",
        3:
            i === 1 ||
                i === n ||
                j === m ||
                j === m ||
                i === j ||
                j === n - i + 1 ||
                j === 1
                ? "x"
                : "-"
    }[type]);

const square = (n, m, type) => {
    let char = "";
    let i, j;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= m; j++) {
            char += setChar(n, m, i, j, type);
        }
        char += "\n";
    }
    logStuff(`${char.green}
${"> Hacker be like".green} `);
};

logStuff(`Method 1: 1
Method 2: 2
Method 3: 3
Leave: 4
    `);

stdin.addListener("data", function (input) {
    input = parseInt(input);
    if (input === 1 || input === 2 || input === 3) {
        square(20, 20, input);
    } else if (input === 4) {
        logStuff(
            `♪ Goodbye my lover.
Goodbye my friend.
You have been the one.
You have been the one for me. ♪`.magenta
        );
        process.exit(0);
    } else {
        logStuff(
            `Wtf my dude? There is only 4 options come on.. shouldn't be that hard to choose :@`.red
        );
    }
});
