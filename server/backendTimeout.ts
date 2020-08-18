import { Error } from "../Error"

export function backendTimeout(): Error {
	return { status: 504, type: "backend timeout" }
}
export namespace backendTimeout {
	export function is(value: any): value is { status: 504; type: "backend timeout" } {
		return Error.is(value) && value.status == 504 && value.type == "backend timeout"
	}
}
