var specialConsole = (function specialConsole() {

    function writeLine() {
        if(arguments.length > 2) {
            console.log(writeLineWithArguments(arguments));
        }
        else {
            console.log(writeLineWithoutArguments(arguments));
        }
    }

    function writeError() {
        if(arguments.length > 2) {
            console.error(writeLineWithArguments(arguments));
        }
        else {
            console.error(writeLineWithoutArguments(arguments));
        }
    }

    function writeWarning() {
        if(arguments.length > 2) {
            console.warn(writeLineWithArguments(arguments));
        }
        else {
            console.warn(writeLineWithoutArguments(arguments));
        }
    }

    function writeLineWithoutArguments(args) {
        var strResult = args[0].toString();
        return strResult;
    }

    function writeLineWithArguments(args) {
        var pattern = args[0];
        var isThereAPlaceHolder = pattern.match(/{{1}[0-9]}{1}/g);
        var arrReplacement = [];
        arrReplacement[0] = pattern.replace(isThereAPlaceHolder[0], args[1]);
        if (isThereAPlaceHolder.length > 1) {
            for (var i = 1; i < isThereAPlaceHolder.length; i++) {
                arrReplacement[i] = arrReplacement[i - 1].replace(isThereAPlaceHolder[i], args[i + 1]);
            }
        }
        var strResult = arrReplacement[arrReplacement.length - 1].toString();
        return strResult;
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    };

})();

specialConsole.writeLine("Line: single Line");
specialConsole.writeLine("Line: {0}, {1}, {2}", "line1", "line2", "line3");
specialConsole.writeError("Error: single Error");
specialConsole.writeError("Error: {0}, {1}, {2}, {3}, {4}", "Err1", "Err2", "Err3", "Err4", "Err5");
specialConsole.writeWarning("Warning: single Warning");
specialConsole.writeWarning("Warning: {0} {1}", "Warn1", "Warn2");
