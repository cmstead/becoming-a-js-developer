const commandBuilderApi = (function () {
    function buildPullCommand() {
        const branchName = $('#branch-name').val();

        return `pull origin ${branchName}`;
    }

    function buildPushCommand() {
        const branchName = $('#branch-name').val();

        return `push origin ${branchName}`;
    }

    function buildAddCommand() {
        return `add --all`;
    }

    function buildCommitCommand() {
        const message = $('#commit-message').val();
        const addDuringCommit = $('#add-during-commit').prop('checked');

        const commitFlags = addDuringCommit ? 'am' : 'm';

        return message !== ''
            ? `commit -${commitFlags} "${message}"`
            : new Error('A commit message is required');
    }

    function buildCheckoutCommand({
        newBranch = false
    }) {
        const branchName = $('#branch-name').val();

        return newBranch
            ? `checkout -b ${branchName}`
            : `checkout ${branchName}`;
    }

    function buildDeleteBranchCommand() {
        const branchName = $('#branch-name').val();

        return `branch -D ${branchName}`;
    }

    function buildCommandBody(commandName) {
        switch (commandName) {
            case 'pull':
                return buildPullCommand();
            case 'push':
                return buildPushCommand();
            case 'add':
                return buildAddCommand();
            case 'commit':
                return buildCommitCommand();
            case 'checkout-branch':
                return buildCheckoutCommand({});
            case 'checkout-new-branch':
                return buildCheckoutCommand({ newBranch: true });
            case 'delete-branch':
                return buildDeleteBranchCommand();
            default:
                return '';
        }
    }

    function buildCommand(commandName) {
        const commandBody = buildCommandBody(commandName);

        if(commandBody === '') {
            return '';
        } else if (typeof commandBody !== 'string') {
            return commandBody.message;
        } else {
            return `git ${commandBody}`;
        }
    }

    return {
        buildCommand
    }
})();