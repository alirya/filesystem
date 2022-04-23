import {PathLike} from "fs";
import ConfigFile from "./config-file";

/**
 * @deprecated
 * Wrapper for {@link ConfigFile} for json
 *
 * @param file
 * absolute path of json config file
 *
 * @param example
 * absolute path of config example file
 *
 * @param reviver
 * json parse reviver
 */

export default function ConfigFileJson(
    file : PathLike,
    example : PathLike,
    reviver ?: Parameters<typeof JSON.parse>[1]
) : object {

    return ConfigFile(file, example, (data : string) => JSON.parse(data, reviver))

}
