import { Error } from "../Error"
import { Result } from "../Result"

export interface MalformedHeader extends Error {
	status: 400
	type: "malformed header"
	argument: { name: string; description: string }
	error?: string
}

export function malformedHeader(name: string, description: string): MalformedHeader {
	return {
		status: 400,
		type: "malformed header",
		argument: { name, description },
	}
}

export namespace MalformedHeader {
	export function is(value: any): value is MalformedHeader {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "malformed header" &&
			typeof value.argument == "object" &&
			typeof value.argument.name == "string" &&
			typeof value.argument.description == "string" &&
			Result.is(value)
		)
	}
}
