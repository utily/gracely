import { Result } from "../Result"

export function noContent(): Result {
	return { status: 204 }
}
export namespace noContent {
	export function is(value: any): value is { status: 204 } {
		return Result.is(value) && value.status == 204
	}
}
