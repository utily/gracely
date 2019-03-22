import { Result } from "../Result"
import { Response } from "../Response"

export function ok<T>(data: T): Result & { data: T, response: Response } {
	return Response.add({ status: 200, data })
}
export namespace ok {
	export function is(value: any): value is { status: 200, data: any } {
		return Result.is(value) && value.status == 200
	}
}
