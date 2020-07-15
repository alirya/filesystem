import ExistsType from "../../boolean/string/exists";
import {PathLike} from "fs";

export default function Exists(path : PathLike) : Error {

    return new Error(ExistsType(false, path))
}
