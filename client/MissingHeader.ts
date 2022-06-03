import { Error } from "../Error"
import { Result } from "../Result"

export interface MissingHeader extends Error {
	status: 400
	type: "missing header"
	argument: { name: string; description: string }
	error?: string
}

export function missingHeader(name: string, description: string): MissingHeader {
	return {
		status: 400,
		type: "missing header",
		argument: { name, description },
	}
}

export namespace MissingHeader {
	export function is(value: any): value is MissingHeader {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "missing header" &&
			typeof value.argument == "object" &&
			typeof value.argument.name == "string" &&
			typeof value.argument.description == "string" &&
			Result.is(value)
		)
	}
}
