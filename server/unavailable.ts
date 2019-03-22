import { Error } from "../Error"
import { Response } from "../Response"

export function unavailable(): Error & { response: Response } {
	return Response.add({ status: 503, type: "service unavailable" })
}
export namespace unavailable {
	export function is(value: any): value is { status: 503, type: "service unavailable" } {
		return Error.is(value) && value.status == 503 && value.type == "service unavailable"
	}
}
