import {PathLike, promises} from "fs";

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
export default async function ParseAsyncParameters<Assumption extends object>(
    file : PathLike,
    parser : (content:string)=>Assumption|Promise<Assumption>,
    defaults ?: (error: Error, file : PathLike) => Assumption|Promise<Assumption>
) : Promise<Assumption> {

    return promises.access(file).then(result=>{

        return promises.readFile(file).then(data=>parser(data.toString()));

    }).catch(error=> {

        if(defaults) {

            return defaults(error, file)
        }

        throw error;
    });

}
