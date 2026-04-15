import { Error } from "../Error"
import { Result } from "../Result"

export interface Conflict extends Error {
	status: 409
	type: "conflict"
	reason?: string
	error?: string
}

export function conflict(reason?: string, error?: string): Conflict {
	return { status: 409, type: "conflict", reason, error }
}

export namespace Conflict {
	export function is(value: any): value is Conflict {
		return (
			typeof value == "object" &&
			value.status == 409 &&
			value.type == "conflict" &&
			(value.reason == undefined || typeof value.reason == "string") &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
