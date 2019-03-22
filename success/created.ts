import { Result } from "../Result"
import { Response } from "../Response"

export function created<T>(data: T): Result & { data: T, response: Response } {
	return Response.add({ status: 201, data })
}
export namespace created {
	export function is(value: any): value is { status: 201, data: any } {
		return Result.is(value) && value.status == 201
	}
}
