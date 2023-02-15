import {dirname} from 'path';
import CurrentFile from "./current-file.js";

export default function CurrentDir(importMeta: ImportMeta) : string {

    return dirname(CurrentFile(importMeta))
}