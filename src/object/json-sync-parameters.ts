import {PathLike} from "fs";
import Callable from "@alirya/function/callable";
import ParseSyncParameters from "./parse-sync-parameters";

/**
 * Parse file to object
 *
 * @param file
 * absolute path file location
 *
 * parser to convert string to object
 *
 * @param defaults
 * @param reviver
 */
export default function JsonSyncParameters<Assumption extends object>(
    file : PathLike,
    defaults ?: Callable<[Error,  PathLike], Assumption>,
    reviver ?: Parameters<typeof JSON.parse>[1]
) : Assumption {

    return ParseSyncParameters(file, (data : string) => JSON.parse(data, reviver), defaults)
}
