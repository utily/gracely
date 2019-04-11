import { Result } from "../Result"
import { Response } from "../Response"

export function created<T>(body: T): Result & { body: T, response: Response } {
	return Response.add({ status: 201, body })
}
export namespace created {
	export function is(value: any): value is { status: 201, body: any } {
		return typeof(value) == "object" &&
			value.body &&
			Result.is(value) &&
			value.status == 201
	}
}
