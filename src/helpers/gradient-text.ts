// ./cli/helpers/gradient-text.ts

import gradient from 'gradient-string'

export default function (string:string): string {

    return gradient.pastel(string)

}
