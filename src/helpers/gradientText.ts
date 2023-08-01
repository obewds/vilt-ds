// ./cli/helpers/gradientText.ts

import gradient from 'gradient-string'

export default function (string:string): string {

    return gradient('lightGreen', 'cyan')(string)

}
