import {PathLike, writeFileSync} from 'fs';

/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export function JsonSyncParameters<
    Type extends any
>(
    file : PathLike,
    source : Type
) : string {

    const data = JSON.stringify(source);

    writeFileSync(file, data);

    return data;
}


/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export function JsonSyncParameter<
    Type extends any
>(  {
        path,
        value
    } :     {
        path: PathLike,
        value : Type
    }
) : string {

    return JsonSyncParameters(path, value);
}


namespace JsonSync {
    export const Parameters = JsonSyncParameters;
    export const Parameter = JsonSyncParameter;
}
export default JsonSync;
