// ./cli/helpers/consoleLogMsgSuccess.ts
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
//# sourceMappingURL=consoleLogMsgSuccess.js.map