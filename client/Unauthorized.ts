import { Result } from "../Result"

export interface Unauthorized {
	status: 401
	type: "not authorized"
	error?: string
}

// Don't give user feedback in error parameter
export function unauthorized(error?: string): Unauthorized {
	return { status: 401, type: "not authorized", error }
}

export namespace Unauthorized {
	export function is(value: any): value is Unauthorized {
		return (
			typeof value == "object" &&
			value.status == 401 &&
			value.type == "not authorized" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
