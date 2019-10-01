import { Result } from "../Result"
import { Response } from "../Response"

export function found(location: string): Result & { location: string, response: Response } {
	return Response.add({ status: 302, location })
}
export namespace found {
	export function is(value: any): value is { status: 302, location: string } {
		return Result.is(value) && value.status == 302
	}
}
