// src/extension.ts
import * as vscode from 'vscode';
import { convertExportsToNamespace } from './converter';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('namespace-exporter.convertToNamespace', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active text editor');
      return;
    }

    const document = editor.document;
    const text = document.getText();
    const newText = convertExportsToNamespace(text);

    editor.edit((editBuilder) => {
      const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(text.length));
      editBuilder.replace(fullRange, newText);
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
