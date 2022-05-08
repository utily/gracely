import { Result } from "../Result"

export function ok<T>(body: T, eTag?: string): Result<T> {
	return { status: 200, body, header: { eTag } }
}
export namespace ok {
	export function is(value: any): value is { status: 200; body: any } {
		return typeof value == "object" && value.body && Result.is(value) && value.status == 200
	}
}
