import "./module"

console.log("test12345678");

// module.hot should be at entry point

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}


