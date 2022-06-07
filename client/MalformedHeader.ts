import { Error } from "../Error"
import { Result } from "../Result"

export interface MalformedHeader extends Error {
	status: 400
	type: "malformed header"
	content: { name: string; description: string }
	error?: string
}

export function malformedHeader(name: string, description: string): MalformedHeader {
	return {
		status: 400,
		type: "malformed header",
		content: { name, description },
	}
}

export namespace MalformedHeader {
	export function is(value: any): value is MalformedHeader {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "malformed header" &&
			typeof value.content == "object" &&
			typeof value.content.name == "string" &&
			typeof value.content.description == "string" &&
			Result.is(value)
		)
	}
}
