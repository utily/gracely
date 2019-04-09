import { Error } from "../Error"
import { Response } from "../Response"

export function malformedContent(property: string, type: string, description: string): Error & { content: { property: string, type: string, description: string }, response: Response } {
	return Response.add({ status: 400, type: "malformed content", content: { property, type, description } })
}
export namespace invalidContent {
	export function is(value: any): value is { status: 400, type: "malformed content", content: { property: string, type: string, description: string } } {
		return Error.is(value) && value.status == 400 && value.type == "malformed content"
	}
}
