import { Error } from "../Error"
import { Result } from "../Result"

export interface EntityTagMissMatch extends Error {
	status: 412
	type: "entity tag miss match"
	argument: { description: string }
	error?: string
}

export function entityTagMissMatch(description: string): EntityTagMissMatch {
	return {
		status: 412,
		type: "entity tag miss match",
		argument: { description },
	}
}

export namespace EntityTagMissMatch {
	export function is(value: any): value is EntityTagMissMatch {
		return (
			typeof value == "object" &&
			value.status == 412 &&
			value.type == "entity tag miss match" &&
			typeof value.argument == "object" &&
			typeof value.argument.description == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
