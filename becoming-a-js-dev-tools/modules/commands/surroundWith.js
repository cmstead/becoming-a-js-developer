function surroundWith(
    logger,
    snippets,
    vsCodeFactory
) {

    const surroundMap = {
        'Function': snippets['Function'],
        'New Promise': snippets['New Promise'],
        'Promise Returning Call': snippets['Promise returning call'],
        'Variable': snippets['Variable']
    };

    function getSelectionRange(vscode, selection) {
        const startPosition = new vscode.Position(selection.start.line, selection.start.character);
        const endPosition = new vscode.Position(selection.end.line, selection.end.character);

        return new vscode.Range(startPosition, endPosition);
    }

    function getSnippetString(vscode, selectedOption) {
        const snippet = surroundMap[selectedOption];
        const snippetString = snippet.body.join('\n');

        return new vscode.SnippetString(snippetString);
    }

    function createOptionNamesList(surroundMap) {
        const surroundOptionNames = Object.keys(surroundMap);

        surroundOptionNames.sort();

        return surroundOptionNames;
    }

    function applySurroundAction(vscode) {
        const activeTextEditor = vscode.window.activeTextEditor;
        const selection = activeTextEditor._selections[0];

        return function (selectedOption) {
            if(typeof selectedOption === 'undefined') {
                logger.log('Surround with action was cancelled.');
            } else {
                const snippetString = getSnippetString(vscode, selectedOption);
                const selectionRange = getSelectionRange(vscode, selection);
    
                activeTextEditor.insertSnippet(snippetString, selectionRange)
            }
        }
    }

    function applySurround() {
        const vscode = vsCodeFactory.getInstance();
        const surroundOptions = createOptionNamesList(surroundMap);

        const quickPickOptions = {
            message: 'Surround Selection With:'
        };

        vscode.window
            .showQuickPick(surroundOptions, quickPickOptions)
            .then(applySurroundAction(vscode));
    }

    return {
        applySurround: applySurround
    };
}

module.exports = surroundWith;