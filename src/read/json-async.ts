import {PathLike} from 'fs';
import ParseAsyncParameters from './parse-async.js';

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
export function JsonAsyncParameters<Assumption extends object>(
    file : PathLike,
    defaults ?: (error: Error, file : PathLike) => Assumption|Promise<Assumption>,
    reviver ?: Parameters<typeof JSON.parse>[1]
) : Promise<Assumption> {

    return ParseAsyncParameters.Parameters(file, (data : string) => JSON.parse(data, reviver), defaults);
}


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
export function JsonAsyncParameter<Assumption extends object>(
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


namespace JsonAsync {
    export const Parameters = JsonAsyncParameters;
    export const Parameter = JsonAsyncParameter;
}
export default JsonAsync;

export {JsonAsync as ReadJsonAsync};
export {JsonAsyncParameters as ReadJsonAsyncParameters};
export {JsonAsyncParameter as ReadJsonAsyncParameter};
