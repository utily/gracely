import { Error } from "../Error"
import { Result } from "../Result"

export interface InvalidQueryArgument extends Error {
	status: 400
	type: "invalid query argument"
	argument: { name: string; type: string; description: string }
	error?: string
}

export function invalidQueryArgument(
	name: string,
	type: string,
	description: string,
	error?: string
): InvalidQueryArgument {
	return { status: 400, type: "invalid query argument", argument: { name, type, description }, error }
}

export namespace InvalidQueryArgument {
	export function is(value: any): value is InvalidQueryArgument {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "invalid query argument" &&
			typeof value.argument == "object" &&
			typeof value.argument.name == "string" &&
			typeof value.argument.type == "string" &&
			typeof value.argument.description == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
