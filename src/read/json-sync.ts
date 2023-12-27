import {PathLike} from 'fs';
import Callable from '@axiona/function/callable.js';
import ParseSyncParameters from './parse-sync.js';

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
export function JsonSyncParameters<Assumption extends object>(
    file : PathLike,
    defaults ?: Callable<[Error,  PathLike], Assumption>,
    reviver ?: Parameters<typeof JSON.parse>[1]
) : Assumption {

    return ParseSyncParameters.Parameters(file, (data : string) => JSON.parse(data, reviver), defaults);
}

export type JsonSyncArgument<Assumption extends object> = {
    file : PathLike,
    defaults ?: Callable<[Error,  PathLike], Assumption>,
    reviver ?: Parameters<typeof JSON.parse>[1]
};

export function JsonSyncParameter<Assumption extends object>({
    file,
    defaults,
    reviver,
} : JsonSyncArgument<Assumption>) {

    return JsonSyncParameters(file, defaults, reviver);
}


namespace JsonSync {
    export const Parameters = JsonSyncParameters;
    export const Parameter = JsonSyncParameter;
}
export default JsonSync;

export {JsonSync as ReadJsonSync};
export {JsonSyncParameters as ReadJsonSyncParameters};
export {JsonSyncParameter as ReadJsonSyncParameter};
