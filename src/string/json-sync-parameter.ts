import {PathLike} from "fs";
import JsonSyncParameters from "./json-sync-parameters";

/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export default function JsonSyncParameter<
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
