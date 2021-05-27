import { Result } from "../Result"

export interface MissingProperty {
	status: 400
	type: "missing property"
	content: { property: string; type: string; description?: string } & Record<string, string>
	error?: string
}

export function missingProperty(
	property: string,
	type: string,
	description: string | Record<string, string>,
	error?: string
): MissingProperty {
	return {
		status: 400,
		type: "missing property",
		content: typeof description == "string" ? { property, type, description } : { property, type, ...description },
		error,
	}
}

export namespace MissingProperty {
	export function is(value: any): value is MissingProperty {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "missing property" &&
			typeof value.content == "object" &&
			typeof value.content.property == "string" &&
			typeof value.content.type == "string" &&
			Object.values(value.content).every(v => v == undefined || typeof v == "string") &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
