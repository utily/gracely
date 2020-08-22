import { Error } from "../Error"

export function missingProperty(
	property: string,
	type: string,
	description: string | any
): Error & { content: { property: string; type: string; description?: string } & any } {
	return {
		status: 400,
		type: "missing property",
		content: typeof description == "string" ? { property, type, description } : { property, type, ...description },
	}
}
export namespace missingProperty {
	export function is(
		value: any
	): value is {
		status: 400
		type: "missing property"
		content: { property: string; type: string; description?: string } & any
	} {
		return Error.is(value) && value.status == 400 && value.type == "missing property"
	}
}
