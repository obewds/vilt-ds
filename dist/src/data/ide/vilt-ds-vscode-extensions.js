// ./src/data/ide/vilt-ds-vscode-extensions.ts
let extensions = [
    'vue.volar',
    'vue.vscode-typescript-vue-plugin',
    'bmewburn.vscode-intelephense-client',
    'bradlc.vscode-tailwindcss',
    'christian-kohler.npm-intellisense',
    'dbaeumer.vscode-eslint',
    'esbenp.prettier-vscode',
    'formulahendry.auto-close-tag',
    'formulahendry.auto-rename-tag',
    'gruntfuggly.todo-tree',
    'janne252.fontawesome-autocomplete',
    'mikestead.dotenv',
    'ms-vscode-remote.remote-containers',
    'onecentlin.laravel-extension-pack',
    'petermekhaeil.vscode-tailwindcss-explorer',
    'redhat.vscode-yaml',
    'shd101wyy.markdown-preview-enhanced',
    'sibiraj-s.vscode-scss-formatter',
    'steoates.autoimport',
    'streetsidesoftware.code-spell-checker',
];
let viltDsVsCodeExtensions = {
    recommendations: []
};
extensions.forEach((extension) => viltDsVsCodeExtensions.recommendations.push(extension));
export default viltDsVsCodeExtensions;
//# sourceMappingURL=vilt-ds-vscode-extensions.js.map