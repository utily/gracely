import { Error } from "../Error"
import { Result } from "../Result"

export interface NotFound extends Error {
	status: 404
	type: "not found"
	error?: string
}

export function notFound(error?: string): NotFound {
	return { status: 404, type: "not found", error }
}

export namespace NotFound {
	export function is(value: any): value is NotFound {
		return (
			typeof value == "object" &&
			value.status == 404 &&
			value.type == "not found" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
