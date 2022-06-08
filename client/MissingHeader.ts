import { Error } from "../Error"
import { Result } from "../Result"

export interface MissingHeader extends Error {
	status: 400
	type: "missing header"
	content: { header: string; description: string }
	error?: string
}

export function missingHeader(header: string, description: string): MissingHeader {
	return {
		status: 400,
		type: "missing header",
		content: { header, description },
	}
}

export namespace MissingHeader {
	export function is(value: any): value is MissingHeader {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "missing header" &&
			typeof value.content == "object" &&
			typeof value.content.header == "string" &&
			typeof value.content.description == "string" &&
			Result.is(value)
		)
	}
}
