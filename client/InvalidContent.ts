import { Result } from "../Result"

export interface InvalidContent {
	status: 400
	type: "invalid content"
	content: {
		type: string
		description: string
		details?: any
	}
	error?: string
}

export function invalidContent(type: string, description: string, details?: any, error?: string): InvalidContent {
	return { status: 400, type: "invalid content", content: { type, description, details }, error }
}

export namespace InvalidContent {
	export function is(value: any): value is InvalidContent {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "invalid content" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
