function snippets (fs) {
    const currentDir = __dirname;
    let snippets = {};

    try{
        const coreJSSnippets = fs.readFileSync(currentDir + '/../../snippets/javascript-core.json', { encoding: 'utf8' });
        snippets = {
            ...snippets,
            ...JSON.parse(coreJSSnippets)
        };
    } catch (e) {
        console.log(e);
    }

    return JSON.parse(snippets);
}

module.exports = snippets;