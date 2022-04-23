import {PathLike, writeFileSync} from "fs";

/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export default function JsonSyncParameters<
    Type extends any
>(
    file : PathLike,
    source : Type
) : string {

    const data = JSON.stringify(source);

    writeFileSync(file, data);

    return data;
}
