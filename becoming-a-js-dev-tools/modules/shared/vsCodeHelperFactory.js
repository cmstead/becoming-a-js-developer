function vsCodeHelperFactory(
    coordsHelper,
    vsCodeFactory
) {
    function getHelperInstance() {
        const activeEditor = vsCodeFactory.getInstance().window.activeTextEditor;

        function getActiveEditor() {
            return activeEditor;
        }

        function getSourceLines() {
            return activeEditor._documentData._lines
        }

        function getSelectionCoords() {
            const selections = activeEditor._selections;
            return coordsHelper.coordsFromDocumentToEditor(selections[0]);
        }

        return {
            getActiveEditor: getActiveEditor,
            getSelectionCoords: getSelectionCoords,
            getSourceLines: getSourceLines
        };
    }

    return {
        getHelperInstance: getHelperInstance
    };
}

module.exports = vsCodeHelperFactory;