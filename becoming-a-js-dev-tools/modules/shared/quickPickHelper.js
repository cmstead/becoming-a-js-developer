function quickPickHelper (
    vsCodeFactory
) {
    
    function getQuickPick(items, message, callback) {
        const vsCode = vsCodeFactory.getInstance();

        const quickPickOptions = {
            message: message
        };

        vsCode.window
            .showQuickPick(items, quickPickOptions)
            .then((selection) => {
                callback(null, selection);
            })
            .catch((error) => {
                callback(error, null);
            });
    }

    return {
        getQuickPick: getQuickPick
    };
}

module.exports = quickPickHelper;