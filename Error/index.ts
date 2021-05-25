import { Result } from "../Result"

export interface Error extends Result {
	type: string
	error?: string
}
export namespace Error {
	export function is(value: any | Error): value is Error {
		return (
			typeof value == "object" &&
			typeof value.type == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value) &&
			value.status >= 400
		)
	}
}
