function consoleMessage(){
    console.log("Console.log");
    console.dir(document.querySelector("#main"));
    console.info("console.info");
    console.warn("console.warn");
    console.error("console.error");
    console.group("links");
    console.dir(document.querySelector("a"));
    console.groupEnd("links");
}

(function(){
    consoleMessage();
})();