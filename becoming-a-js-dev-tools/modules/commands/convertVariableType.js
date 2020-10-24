function convertVariableType(
    astHelper,
    coordsHelper,
    editActionsFactory,
    logger,
    parser,
    quickPickHelper,
    selectionHelper,
    vsCodeHelperFactory
) {

    function isVariableDeclaration(node) {
        return node.type === 'VariableDeclaration';
    }

    function getNearestVariableDeclaration(sourceAst, selectionAstCoords) {
        let foundNode = null;

        astHelper.traverse(sourceAst, {
            enter: function (node) {
                if (
                    isVariableDeclaration(node)
                    && astHelper.coordsInNode(selectionAstCoords, node)
                ) {
                    foundNode = node;
                }
            }
        });

        return foundNode;
    }

    function getSelectionAstCoords(vsCodeHelper) {
        const selectionCoords = vsCodeHelper.getSelectionCoords();
        return coordsHelper.coordsFromEditorToAst(selectionCoords);
    }

    function getDeclarationSelection(nearestVariableDeclaration, sourceLines) {
        const variableDeclarationCoords = coordsHelper.coordsFromAstToEditor(nearestVariableDeclaration.loc);

        return selectionHelper.getSelection(sourceLines, variableDeclarationCoords);
    }

    function getVariableKinds(oldKind) {
        let variableKinds = ['const', 'let', 'var'];
        const oldTypeKind = variableKinds.indexOf(oldKind);

        variableKinds.splice(oldTypeKind, 1);

        return variableKinds;
    }

    function applyUpdate(oldKind, variableKinds, declarationNode, selectedLines) {
        const selectionMessage = 'Select variable type for update:';

        quickPickHelper.getQuickPick(
            variableKinds,
            selectionMessage,
            function (error, selectedKind) {
                if (error) {
                    logger.log('Unable to complete variable type conversion: ' + error.message);
                } else if (typeof selectedKind === 'undefined') {
                    logger.log('Variable conversion cancelled.');
                } else {
                    const activeEditor = vsCodeHelperFactory.getHelperInstance().getActiveEditor();
                    const declaration = selectedLines.join('\n');
                    const newDeclaration = declaration.replace(oldKind + ' ', selectedKind + ' ');
                    const declarationCoords = coordsHelper.coordsFromAstToEditor(declarationNode.loc);

                    editActionsFactory(activeEditor)
                        .applySetEdit(newDeclaration, declarationCoords)
                }
            }
        );
    }

    function applyConversion() {
        const vsCodeHelper = vsCodeHelperFactory.getHelperInstance();
        const sourceLines = vsCodeHelper.getSourceLines();

        const sourceAst = parser.parseSourceLines(sourceLines);
        const selectionAstCoords = getSelectionAstCoords(vsCodeHelper);

        const declarationNode = getNearestVariableDeclaration(sourceAst, selectionAstCoords);

        if (declarationNode === null) {
            logger.log('Unable to find an appropriate variable to convert.');
        } else {
            const declarationSelection = getDeclarationSelection(declarationNode, sourceLines);
            const variableKinds = getVariableKinds(declarationNode.kind);

            applyUpdate(
                declarationNode.kind,
                variableKinds,
                declarationNode,
                declarationSelection
            );
        }
    }

    return {
        applyConversion: applyConversion
    };
}

module.exports = convertVariableType;