const commandApi = (function () {
    function hideAllCommandOptions() {
        $('.command-options').hide();
    }

    function showCommandOptions(commandName) {
        const classSelector = `.${commandName}-options`;

        hideAllCommandOptions();
        $(classSelector).show();
    }

    function hideGitCommand() {
        $('#git-command').hide();
    }

    function showGitCommand() {
        $('#git-command').show();
    }

    function updateGitCommandDisplay(commandText) {
        $('#git-command .code').val(commandText);
    }

    function resetInputFields() {
        $('input').each(function (_, element) {
            const $element = $(element);
            if($element.attr('type') === 'text') {
                const resetValue = $element.data('reset-value');

                $element.val(resetValue);
            } else if ($element.attr('type') === 'checkbox'){
                $element.prop('checked', false);
            }
        })
    }

    function displayCommand(commandName) {
        const commandText = commandBuilderApi.buildCommand(commandName);

        if(commandText === '') {
            hideGitCommand();
        } else {
            showGitCommand();
            updateGitCommandDisplay(commandText);
        }
    }

    return {
        displayCommand,
        hideAllCommandOptions,
        resetInputFields,
        showCommandOptions
    };
})();
