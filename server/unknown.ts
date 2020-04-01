import { Error } from "../Error"

export function unknSown(error?: any): { status: 500, type: "unknown error", error?: any } {
	return { status: 500, type: "unknown error", error }
}
export namespace unknown {
	export function is(value: any): value is { status: 500, type: "unknown error", error?: any } {
		return Error.is(value) && value.status == 500 && value.type == "unknown error"
	}
}
