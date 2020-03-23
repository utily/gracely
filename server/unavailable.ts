import { Error } from "../Error"

export function unavailable(): Error {
	return { status: 503, type: "service unavailable" }
}
export namespace unavailable {
	export function is(value: any): value is { status: 503, type: "service unavailable" } {
		return Error.is(value) && value.status == 503 && value.type == "service unavailable"
	}
}
