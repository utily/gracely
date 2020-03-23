import { Error } from "../Error"

export function missingQueryArgument(name: string, type: string, description: string): Error & { argument: { name: string, type: string, description: string } } {
	return { status: 400, type: "missing query argument", argument: { name, type, description } }
}
export namespace missingQueryArgument {
	export function is(value: any): value is { status: 400, type: "missing query argument", argument: { name: string, type: string, description: string } } {
		return Error.is(value) && value.status == 400 && value.type == "missing query argument"
	}
}
