import { Result } from "../Result"

export interface Misconfigured {
	status: 503
	type: "missing configuration"
	key: string
	description: string
	error?: string
}

export namespace Misconfigured {
	export function is(value: any): value is Misconfigured {
		return (
			typeof value == "object" &&
			value.status == 503 &&
			value.type == "missing configuration" &&
			typeof value.key == "string" &&
			typeof value.description == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
	export function create(key: string, description: string, error?: string): Misconfigured {
		return { status: 503, type: "missing configuration", key, description, error }
	}
}
