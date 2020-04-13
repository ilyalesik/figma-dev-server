
figma.showUI(__html__, {
    visible: false
});

figma.ui.onmessage = message => {
    console.log(message);
    if (message.type === "RUN_CODE") {
        console.log("run code")
        eval(message.value);
    }
};
