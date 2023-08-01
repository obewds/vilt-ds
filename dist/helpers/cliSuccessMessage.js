// ./cli/helpers/cliSuccessMessage.ts
import gradientText from './gradientText.js';
export default function (string, prefixLineBreak = false, suffixLineBreak = false) {
    if (prefixLineBreak) {
        console.log(' ');
    }
    console.log(gradientText(string));
    if (suffixLineBreak) {
        console.log(' ');
    }
}
//# sourceMappingURL=cliSuccessMessage.js.map