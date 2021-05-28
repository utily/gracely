import { Error } from "../Error"
import { Result } from "../Result"

export interface Unknown extends Error {
	status: 500
	type: "unknown error"
	details?: any
	error?: string
}

export function unknown(details?: any, error?: string): Unknown {
	return { status: 500, type: "unknown error", details, error }
}

export namespace Unknown {
	export function is(value: any): value is Unknown {
		return (
			typeof value == "object" &&
			value.status == 500 &&
			value.type == "unknown error" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
