import { Result } from "../Result"

export interface Unknown {
	status: 500
	type: "unknown error"
	details?: any
	error?: string
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
	export function create(details?: any, error?: string): Unknown {
		return { status: 500, type: "unknown error", details, error }
	}
}
