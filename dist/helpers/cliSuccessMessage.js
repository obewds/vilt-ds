// ./cli/helpers/cliSuccessMessage.ts
import gradientText from './gradient-text.js';
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