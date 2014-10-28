function withoutArguments(){
    console.log("Number of Arguments: " + arguments.length);
    for(var i = 0; i < arguments.length; i++){
        console.log("ARGUMENT " + (i + 1) + ":");
        console.log("VALUE: " + arguments[i] + ", TYPE: " + typeof arguments[i]);
    }
    console.log();
}

var func = function(){
    var obj = {};
    obj.name = "Pesho";
    return obj;
};

withoutArguments(1234, "gosho", func().name);
withoutArguments("Mosho", "Gosho", "Tosho");
withoutArguments(12345555, "gosho");
withoutArguments(this);

withoutArguments.call(null, 1234, "Goshoooo");

withoutArguments.apply(null, [1234, "Goshooooo"]);
