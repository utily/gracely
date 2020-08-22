import { Error } from "../Error"

export function notFound(): Error {
	return { status: 404, type: "not found" }
}
export namespace notFound {
	export function is(value: any): value is { status: 404; type: "not found" } {
		return Error.is(value) && value.status == 404 && value.type == "not found"
	}
}
