'use strict';

function parser(htmlToJs, espree) {

    const scriptPattern = /<script/i;
    const shebangPattern = /^\#\!\/usr\/bin\/env node/i;

    function isHtmlSource(sourceLines) {
        return sourceLines.filter(value => scriptPattern.test(value)).length > 0;
    }

    function stripShebang(sourceLines) {
        return sourceLines.map(function (line) {
            return shebangPattern.test(line) ? '' : line;
        });
    }

    function buildParseableSource(sourceLines) {
        return isHtmlSource(sourceLines)
            ? htmlToJs.convert(sourceLines)
            : stripShebang(sourceLines);
    }

    function parseSourceLines(sourceLines) {
        const parseableSource = buildParseableSource(sourceLines);

        return parse(parseableSource.join('\n'));
    }

    function tryParseSourceLines(sourceLines) {
        const parseableSource = buildParseableSource(sourceLines);

        return tryParse(parseableSource.join('\n'));
    }

    const scriptOptions = {
        loc: true,
        ecmaVersion: 10,
        sourceType: 'script',
        ecmaFeatures: {
            jsx: true
        }
    };

    const moduleOptions = {
        loc: true,
        ecmaVersion: 10,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    };

    function tryParseSource(sourceText) {
        let ast = null;

        try{
            ast = espree.parse(sourceText, scriptOptions);
        } catch (e) {
            ast = espree.parse(sourceText, moduleOptions);
        }
        
        return ast;
    }

    function tryParse(sourceText) {
        return tryParseSource(sourceText);
    }

    function parse(sourceText) {
        try {
            return tryParse(sourceText);
        } catch (e) {
            console.error(`Unable to parse source code. Parser error: ${e.message}`);
        }
    }

    return {
        parse: parse,
        parseSourceLines: parseSourceLines,
        tryParseSourceLines: tryParseSourceLines
    };

}

module.exports = parser;