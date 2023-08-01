// ./cli/helpers/consoleLogMsgSuccess.ts

import gradientText from './gradientText.js'

export default function (string:string, prefixLineBreak:boolean = false, suffixLineBreak:boolean = false): void {

    if (prefixLineBreak) {
        console.log(' ')
    }

    console.log(gradientText(string))

    if (suffixLineBreak) {
        console.log(' ')
    }

}
