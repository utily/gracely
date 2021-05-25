import { Result } from "../Result"

export interface BackendTimeout {
	status: 504
	type: "backend timeout"
	error?: string
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
	export function create(error?: string): BackendTimeout {
		return { status: 504, type: "backend timeout", error }
	}
}
