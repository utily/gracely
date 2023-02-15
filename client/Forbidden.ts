import { Error } from "../Error"
import { Result } from "../Result"

export interface Forbidden extends Error {
	status: 403
	type: "forbidden"
	error?: string
}

export function forbidden(error?: string): Forbidden {
	return { status: 403, type: "forbidden", error }
}

export namespace Forbidden {
	export function is(value: any): value is Forbidden {
		return (
			typeof value == "object" &&
			value.status == 403 &&
			value.type == "forbidden" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
