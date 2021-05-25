import { Result } from "../Result"

export interface DatabaseFailure {
	status: 502
	type: "database failure"
	details?: any
	error?: string
}

export function databaseFailure(details?: any, error?: string): DatabaseFailure {
	return { status: 502, type: "database failure", details, error }
}

export namespace DatabaseFailure {
	export function is(value: any): value is DatabaseFailure {
		return (
			typeof value == "object" &&
			value.status == 502 &&
			value.type == "database failure" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
