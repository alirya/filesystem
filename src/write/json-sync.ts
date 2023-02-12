import {PathLike, writeFileSync} from "fs";
import {SerializeSyncParameters} from './serialize-sync.js';


export function JsonSyncParameters<
    Type extends object
>(
    file : PathLike,
    source : Type,
    space?: string | number
) : string {

    return SerializeSyncParameters(file, source, (data)=>JSON.stringify(data, undefined, space));
}

/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export function JsonSyncParameter<
    Type extends object
>(  {
        path,
        value,
        space
    } : {
        path: PathLike,
        value : Type,
        space?: string | number
    }
) : string {

    return JsonSyncParameters(path, value, space);
}


namespace JsonSync {
    export const Parameters = JsonSyncParameters;
    export const Parameter = JsonSyncParameter;
}
export default JsonSync;
