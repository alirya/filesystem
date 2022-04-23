import Callback from "@alirya/function/assert/callback-parameters";
import ExistsNumberError from "./throwable/exists-parameters";
import {existsSync, PathLike} from "fs";

export default function ExistsParameters(
    value : PathLike,
    error : (path:PathLike)=>Error = ExistsNumberError
) : void {

    Callback(value, existsSync, error);
}
