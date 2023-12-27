import {fileURLToPath} from 'url';

export default function CurrentFile(importMeta: ImportMeta) : string {

    return fileURLToPath(importMeta.url);
}