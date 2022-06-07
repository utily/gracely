import { Error } from "../Error"
import { Result } from "../Result"

export interface EntityTagMissMatch extends Error {
	status: 412
	type: "entity tag miss match"
	content: { description: string }
	error?: string
}

export function entityTagMissMatch(description: string): EntityTagMissMatch {
	return {
		status: 412,
		type: "entity tag miss match",
		content: { description },
	}
}

export namespace EntityTagMissMatch {
	export function is(value: any): value is EntityTagMissMatch {
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
