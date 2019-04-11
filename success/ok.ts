import { Result } from "../Result"
import { Response } from "../Response"

export function ok<T>(body: T): Result & { body: T, response: Response } {
	return Response.add({ status: 200, body })
}
export namespace ok {
	export function is(value: any): value is { status: 200, body: any } {
		return typeof(value) == "object" &&
			value.body &&
			Result.is(value) &&
			value.status == 200
	}
}
