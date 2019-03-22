import { Error } from "../Error"
import { Response } from "../Response"

export function notFound(name: string, type: string, description: string): Error & { argument: { name: string, type: string, description: string }, response: Response } {
	return Response.add({ status: 404, type: "not found", argument: { name, type, description } })
}
export namespace notFound {
	export function is(value: any): value is { status: 404, type: "not found", argument: { name: string, type: string, description: string } } {
		return Error.is(value) && value.status == 404 && value.type == "not found"
	}
}
