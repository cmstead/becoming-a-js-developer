
function activate(context) {
	const container = require('./container');

	const vscode = container.build('vsCodeFactory').getInstance();

	context.subscriptions.push(
		vscode.commands.registerCommand(
			'cmstead.becoming-a-js-dev-tools.convertVariableType',
			() => container.build('convertVariableType').applyConversion()
		));

	context.subscriptions.push(
		vscode.commands.registerCommand(
			'cmstead.becoming-a-js-dev-tools.surroundWith',
			() => container.build('surroundWith').applySurround()
		));

}

function deactivate() { }

exports.activate = activate;
exports.deactivate = deactivate;
