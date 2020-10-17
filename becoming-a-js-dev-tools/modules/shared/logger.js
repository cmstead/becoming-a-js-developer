function logger (
    vsCodeFactory
) {
    
    function log (message) {
        const vscode = vsCodeFactory.getInstance();

        vscode.window.showInformationMessage(message);
    }

    return {
        log: log
    };
}

module.exports = logger;