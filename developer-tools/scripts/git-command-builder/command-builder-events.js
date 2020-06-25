$(document).ready(function () {
    commandUIApi.setDefaultBranchName();
    
    $('#command-type').on('change', commandUIApi.changeCommandType);
    $('input[type="text"]').on('keyup', commandUIApi.updateCommandDisplay);

    $('input[type="checkbox"]').on('click', commandUIApi.updateCommandDisplay);
    $('input[type="text"]').on('click', commandUIApi.selectAllText);

    $('#git-command button').on('click', commandUIApi.copyCommandToClipboard);
});