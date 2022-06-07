import { Error } from "../Error"
import { Result } from "../Result"

export interface EntityTagMismatch extends Error {
	status: 412
	type: "entity tag mismatch"
	content: { description: string }
	error?: string
}

export function entityTagMismatch(description: string): EntityTagMismatch {
	return {
		status: 412,
		type: "entity tag mismatch",
		content: { description },
	}
}

export namespace EntityTagMismatch {
	export function is(value: any): value is EntityTagMismatch {
		return (
			typeof value == "object" &&
			value.status == 412 &&
			value.type == "entity tag miss match" &&
			typeof value.content == "object" &&
			typeof value.content.description == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
