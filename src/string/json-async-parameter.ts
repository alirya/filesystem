import {PathLike} from "fs";
import JsonAsyncParameters from "./json-async-parameters";

/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export default function JsonAsyncParameter<
    Type extends any
>(
    file : PathLike,
    source : Type
) : Promise<string> {

    return JsonAsyncParameters(file, source);
}
