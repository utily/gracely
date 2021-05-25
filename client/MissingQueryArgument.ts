import { Result } from "../Result"

export interface MissingQueryArgument {
	status: 400
	type: "missing query argument"
	argument: { name: string; type: string; description: string }
	error?: string
}

export function missingQueryArgument(
	name: string,
	type: string,
	description: string,
	error?: string
): MissingQueryArgument {
	return {
		status: 400,
		type: "missing query argument",
		argument: { name, type, description },
		error,
	}
}

export namespace MissingQueryArgument {
	export function is(value: any): value is MissingQueryArgument {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "missing query argument" &&
			typeof value.argument == "object" &&
			typeof value.argument.name == "string" &&
			typeof value.argument.type == "string" &&
			typeof value.argument.description == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
