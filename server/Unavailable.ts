import { Error } from "../Error"
import { Result } from "../Result"

export interface Unavailable extends Error {
	status: 503
	type: "service unavailable"
	error?: string
	details?: any
}

export function unavailable(error?: string, details?: any): Unavailable {
	return { status: 503, type: "service unavailable", error, details }
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
