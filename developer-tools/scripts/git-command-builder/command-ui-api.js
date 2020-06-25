const commandUIApi = (function () {
    let currentCommandName = '';

    commandApi.hideAllCommandOptions();
    commandApi.displayCommand(currentCommandName);

    function updateCommandDisplay() {
        commandApi.displayCommand(currentCommandName);
    }

    function getCommandName(event) {
        return $(event.target).val();
    }

    function changeCommandType(event) {
        currentCommandName = getCommandName(event);

        commandApi.resetInputFields();
        commandApi.showCommandOptions(currentCommandName);

        updateCommandDisplay();
    }

    function selectAllText() {
        $(this).select();
    }

    function copyCommandToClipboard() {
        const codeElement = $('#git-command .code');

        codeElement.focus();
        codeElement.select();

        document.execCommand('copy');

        codeElement
            .blur()
            .addClass('success');

        setTimeout(() => {
            codeElement.removeClass('success');
        }, 2000);
    }

    function getDefaultBranch() {
        const selectedTokenPair = window.location.href
            .split('?')[1]
            ?.split('&')
            .map(token => token.split('='))
            .find(tokenPair => tokenPair[0] === 'main-branch');

        return typeof selectedTokenPair !== 'undefined'
            ? selectedTokenPair[1]
            : 'master';

    }

    function setDefaultBranchName() {
        let defaultBranchName = getDefaultBranch();

        $('#branch-name').data('reset-value', defaultBranchName);
    }

    return {
        changeCommandType,
        copyCommandToClipboard,
        selectAllText,
        setDefaultBranchName,
        updateCommandDisplay
    };
})();