import { Error } from "../Error"

export function malformedContent(
	property: string,
	type: string,
	description: string,
	details?: any
): Error & { content: { property: string; type: string; description: string; details?: any } } {
	return { status: 400, type: "malformed content", content: { property, type, description, details } }
}
export namespace malformedContent {
	export function is(
		value: any
	): value is {
		status: 400
		type: "malformed content"
		content: { property: string; type: string; description: string; details?: any }
	} {
		return Error.is(value) && value.status == 400 && value.type == "malformed content"
	}
}
