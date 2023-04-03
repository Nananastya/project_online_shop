import { useContext } from "react";
import { FunctionContext } from "../components/FunctionProvider";

export function useFunction() {
    return useContext(FunctionContext);
}