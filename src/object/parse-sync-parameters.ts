import {PathLike, readFileSync} from "fs";
import Callable from "@alirya/function/callable";

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
export default function ParseSyncParameters<Assumption extends object>(
    file : PathLike,
    parser : Callable<[string], Assumption>,
    defaults ?: Callable<[Error,  PathLike], Assumption>
) : Assumption {

    try {

        return parser(readFileSync(file).toString());

    } catch (error) {

        if(defaults) {

            return defaults(error, file)
        }

        throw error;
    }


}
