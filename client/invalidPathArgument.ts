import { Error } from "../Error"

export function invalidPathArgument(pattern: string, name: string, type: string, description: string): Error & { pattern: string, argument: { name: string, type: string, description: string } } {
	return { status: 400, type: "invalid path argument", pattern, argument: { name, type, description } }
}
export namespace invalidPathArgument {
	export function is(value: any): value is { status: 400, type: "invalid path argument", pattern: string, argument: { name: string, type: string, description: string } } {
		return Error.is(value) && value.status == 400 && value.type == "invalid path argument"
	}
}
