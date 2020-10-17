function vsCodeFactory () {
    
    function getInstance() {
        return require('vscode');
    }

    return {
        getInstance: getInstance
    };
}

module.exports = vsCodeFactory;