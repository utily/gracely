import { Result } from "../Result"

export function ok<T = any>(body: T, eTag?: string): Result<T> & { body: T } {
	return { status: 200, body, header: { eTag } }
}
export namespace ok {
	export function is(value: any): value is { status: 200; body: any } {
		return typeof value == "object" && value != null && value.body != null && Result.is(value) && value.status == 200
	}
}
