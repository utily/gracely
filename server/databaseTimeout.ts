import { Error } from "../Error"

export function databaseTimeout(): Error {
	return { status: 504, type: "database timeout" }
}
export namespace databaseTimeout {
	export function is(value: any): value is { status: 504, type: "database timeout" } {
		return Error.is(value) && value.status == 504 && value.type == "database timeout"
	}
}
