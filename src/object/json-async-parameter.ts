import {PathLike} from "fs";
import JsonAsyncParameters from "./json-async-parameters";

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
export default function JsonAsyncParameter<Assumption extends object>(
    {
        path,
        callback,
        defaults,
    } : {
        path : PathLike,
        callback ?: (error: Error, file : PathLike) => Assumption|Promise<Assumption>,
        defaults ?: Parameters<typeof JSON.parse>[1],
    }
) : Promise<Assumption> {

    return JsonAsyncParameters(path, callback, defaults);
}
