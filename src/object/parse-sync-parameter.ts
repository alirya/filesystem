import {PathLike} from "fs";
import Callable from "@alirya/function/callable";
import ParseSyncParameters from "./parse-sync-parameters";

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
export default function ParseSyncParameter<
    Assumption extends object
>(  {
        path,
        callback,
        defaults
    } : {
        path : PathLike,
        callback : Callable<[string], Assumption>,
        defaults ?: Callable<[Error,  PathLike], Assumption>,
    }
) : Assumption {

    return ParseSyncParameters(path, callback, defaults)
}
