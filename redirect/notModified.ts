import { Result } from "../Result"

export function notModified(eTag: string): Result {
	return { status: 304, header: { eTag: eTag } }
}
export namespace notModified {
	export function is(value: any): value is { status: 304 } {
		return (
			typeof value == "object" &&
			Result.is(value) &&
			value.status == 304 &&
			typeof value.header == "object" &&
			typeof value.header.eTag == "string"
		)
	}
}
