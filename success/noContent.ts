import { Result } from "../Result"
import { Response } from "../Response"

export function noContent(): Result & { response: Response } {
	return Response.add({ status: 204 })
}
export namespace noContent {
	export function is(value: any): value is { status: 204 } {
		return Result.is(value) && value.status == 204
	}
}
