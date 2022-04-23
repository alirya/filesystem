import {PathLike} from "fs";
import ParseAsyncParameters from "./parse-async-parameters";

/**
 * wrapper for {@link Parser} for json
 *
 * @param file
 * absolute path json file location
 *
 * @param defaults
 * @param reviver
 * json parse reviver
 */
export default function JsonAsyncParameters<Assumption extends object>(
    file : PathLike,
    defaults ?: (error: Error, file : PathLike) => Assumption|Promise<Assumption>,
    reviver ?: Parameters<typeof JSON.parse>[1]
) : Promise<Assumption> {

    return ParseAsyncParameters(file, (data : string) => JSON.parse(data, reviver), defaults)
}
