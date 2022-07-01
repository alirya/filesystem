import {PathLike, promises} from 'fs';

/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export function JsonAsyncParameters<
    Type extends any
>(
    file : PathLike,
    source : Type
) : Promise<string> {

    const data = JSON.stringify(source);

    return promises.writeFile(file, data).then(()=>data);
}


/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export function JsonAsyncParameter<
    Type extends any
>(
    file : PathLike,
    source : Type
) : Promise<string> {

    return JsonAsyncParameters(file, source);
}


namespace JsonAsync {
    export const Parameters = JsonAsyncParameters;
    export const Parameter = JsonAsyncParameter;
}
export default JsonAsync;
