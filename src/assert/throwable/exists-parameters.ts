import ExistsType from "../../boolean/string/exists-parameters";
import {PathLike} from "fs";

export default function ExistsParameters(path : PathLike) : Error {

    return new Error(ExistsType(false, path))
}
