import {PathLike} from 'fs';
import ConfigSuffix from './config-suffix';

/**
 * @deprecated
 * Wrapper for {@link ConfigFile} for json
 *
 * @param file
 * absolute path of json config file
 *
 * @param suffix
 * example suffix to be appended to {@param file}
 *
 * @param reviver
 * json parse reviver
 */
export default function ConfigSuffixJson(
    file : PathLike,
    suffix : PathLike,
    reviver ?: Parameters<typeof JSON.parse>[1]
) : object {

    return ConfigSuffix(file, suffix, (data : string) => JSON.parse(data, reviver));
}
