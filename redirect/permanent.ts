import { Result } from "../Result"
import { Response } from "../Response"

export function permanent(location: string): Result & { location: string, response: Response } {
	return Response.add({ status: 301, location })
}
export namespace permanent {
	export function is(value: any): value is { status: 301, location: string } {
		return Result.is(value) && value.status == 301
	}
}
