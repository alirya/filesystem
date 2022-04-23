import {copyFileSync, existsSync, PathLike} from "fs";
import Parser from "./parse-async-parameters";

/**
 * @deprecated
 * load and parse config file, if {@param file} is not exists {@param example} will be used
 * for sources and copied to {@param file}
 *
 * @param file
 * absolute path of config file
 *
 * @param example
 * absolute path of config example file
 *
 * @param parser
 * parser to convert string to object
 */
export default function ConfigFile(
    file : PathLike,
    example : PathLike,
    parser : (content:string)=>object
) : object {

    if(existsSync(file)) {

        return Parser(file, parser);
    }

    let object = Parser(example, parser);
    copyFileSync(example, file);
    return object;

}
