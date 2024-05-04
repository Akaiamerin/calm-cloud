import { readFileSync, writeFileSync } from 'node:fs';
import { EOL } from 'node:os';
function parse(json) {
    return json
        .split(EOL)
        .map((str) => {
            const index = str.indexOf('//');
            if (index !== -1) {
                str = str.substring(0, index);
            }
            return str.replace(/\s*/g, '');
        })
        .join('')
        .replace(',}', '}');
}
function convert(srcPath, distPath) {
    const json = readFileSync(srcPath).toString();
    const str = parse(json);
    writeFileSync(distPath, str);
}
function main() {
    const src = './src/';
    const dist = './themes/';
    const light = 'calm-cloud-light-color-theme.json';
    convert(`${src}${light}`, `${dist}${light}`);
}
main();