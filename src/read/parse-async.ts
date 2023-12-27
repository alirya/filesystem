import {PathLike, promises} from 'fs';

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
export async function ParseAsyncParameters<Assumption extends object>(
    file : PathLike,
    parser : (content:string)=>Assumption|Promise<Assumption>,
    defaults ?: (error: Error, file : PathLike) => Assumption|Promise<Assumption>
) : Promise<Assumption> {

    return promises.access(file).then(result=>{

        return promises.readFile(file).then(data=>parser(data.toString()));

    }).catch(error=> {

        if(defaults) {

            return defaults(error, file);
        }

        throw error;
    });

}


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
export async function ParseAsyncParameter<Assumption extends object>(
    {
        path,
        callback,
        defaults,
    } : {
        path : PathLike,
        callback : (content:string)=>Assumption|Promise<Assumption>,
        defaults ?: (error: Error, file : PathLike) => Assumption|Promise<Assumption>,
    }
) : Promise<Assumption> {

    return ParseAsyncParameters(path, callback, defaults);
}


namespace ParseAsync {
    export const Parameters = ParseAsyncParameters;
    export const Parameter = ParseAsyncParameter;
}
export default ParseAsync;

export {ParseAsync as ReadParseAsync};
export {ParseAsyncParameters as ReadParseAsyncParameters};
export {ParseAsyncParameter as ReadParseAsyncParameter};
