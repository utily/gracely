import { Result } from "../Result"

export function created<T = any>(body: T): Result<T> & { body: T } {
	return { status: 201, body }
}
export namespace created {
	export function is(value: any): value is { status: 201; body: any } {
		return typeof value == "object" && value != null && value.body != null && Result.is(value) && value.status == 201
	}
}
