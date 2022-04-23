import {PathLike} from "fs";
import ParseAsyncParameters from "./parse-async-parameters";

/**
 * Parse file to object
 *
 * @param file
 * absolute path file location
 *
 * @param parser
 * parser to convert string to object
 *
 * @param defaults
 */
export default async function ParseAsyncParameter<Assumption extends object>(
    {
        path,
        callback,
        defaults,
    } : {
        path : PathLike,
        callback : (content:string)=>Assumption|Promise<Assumption>,
        defaults ?: (error: Error, file : PathLike) => Assumption|Promise<Assumption>,
    }
) : Promise<Assumption> {

    return ParseAsyncParameters(path, callback, defaults)
}
