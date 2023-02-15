import { Result } from "../Result"

export function accepted<T>(body: T): Result & { body: T } {
	return { status: 202, body }
}
export namespace accepted {
	export function is(value: any): value is { status: 202; body: any } {
		return typeof value == "object" && value.body && Result.is(value) && value.status == 202
	}
}
