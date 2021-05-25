import { Result } from "../Result"

export interface DatabaseTimeout {
	status: 504
	type: "database timeout"
	error?: string
}

export namespace DatabaseTimeout {
	export function is(value: any): value is DatabaseTimeout {
		return (
			typeof value == "object" &&
			value.status == 504 &&
			value.type == "database timeout" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
	export function create(error?: string): DatabaseTimeout {
		return { status: 504, type: "database timeout", error }
	}
}
