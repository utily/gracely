import { Error } from "../Error"

export function unkown(error?: any): { status: 500, type: "unkown error", error?: any } {
	return { status: 500, type: "unkown error", error }
}
export namespace unkown {
	export function is(value: any): value is { status: 500, type: "unkown error", error?: any } {
		return Error.is(value) && value.status == 500 && value.type == "unkown error"
	}
}
