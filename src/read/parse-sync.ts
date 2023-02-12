import {PathLike, readFileSync} from 'fs';
import Callable from '@alirya/function/callable.js';

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
export function ParseSyncParameters<Assumption extends object>(
    file : PathLike,
    parser : Callable<[string], Assumption>,
    defaults ?: Callable<[Error,  PathLike], Assumption>
) : Assumption {

    try {

        return parser(readFileSync(file).toString());

    } catch (error) {

        if(defaults) {

            return defaults(error, file);
        }

        throw error;
    }


}


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
export function ParseSyncParameter<
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

    return ParseSyncParameters(path, callback, defaults);
}


namespace ParseSync {
    export const Parameters = ParseSyncParameters;
    export const Parameter = ParseSyncParameter;
}
export default ParseSync;
