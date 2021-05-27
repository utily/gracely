import { Result } from "../Result"

export interface Unavailable {
	status: 503
	type: "service unavailable"
	error?: string
}

export function unavailable(error?: string): Unavailable {
	return { status: 503, type: "service unavailable", error }
}

export namespace Unavailable {
	export function is(value: any): value is Unavailable {
		return (
			typeof value == "object" &&
			value.status == 503 &&
			value.type == "service unavailable" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
