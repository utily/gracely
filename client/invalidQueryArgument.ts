import { Error } from "../Error"

export function invalidQueryArgument(name: string, type: string, description: string): Error & { argument: { name: string, type: string, description: string } } {
	return { status: 400, type: "invalid query argument", argument: { name, type, description } }
}
export namespace invalidQueryArgument {
	export function is(value: any): value is { status: 400, type: "invalid query argument", argument: { name: string, type: string, description: string } } {
		return Error.is(value) && value.status == 400 && value.type == "invalid query argument"
	}
}
