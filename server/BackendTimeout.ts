import { Error } from "../Error"
import { Result } from "../Result"

export interface BackendTimeout extends Error {
	status: 504
	type: "backend timeout"
	error?: string
}

export function backendTimeout(error?: string): BackendTimeout {
	return { status: 504, type: "backend timeout", error }
}

export namespace BackendTimeout {
	export function is(value: any): value is BackendTimeout {
		return (
			typeof value == "object" &&
			value.status == 504 &&
			value.type == "backend timeout" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
