'use strict';

function coordsHelper() {

    function coordsFromDocumentToEditor(documentCoords) {
        return {
            start: [
                documentCoords._start._line,
                documentCoords._start._character
            ],
            end: [
                documentCoords._end._line,
                documentCoords._end._character
            ]
        }
    }

    function coordsFromEditorToAst(editorCoords) {
        return {
            start: {
                line: editorCoords.start[0] + 1,
                column: editorCoords.start[1]
            },
            end: {
                line: editorCoords.end[0] + 1,
                column: editorCoords.end[1]
            }
        };
    }

    function coordsFromAstToEditor(astCoords) {
        return {
            start: [astCoords.start.line - 1, astCoords.start.column],
            end: [astCoords.end.line - 1, astCoords.end.column]
        };
    }

    return {
        coordsFromDocumentToEditor: coordsFromDocumentToEditor,
        coordsFromEditorToAst: coordsFromEditorToAst,
        coordsFromAstToEditor: coordsFromAstToEditor
    };
}

module.exports = coordsHelper;