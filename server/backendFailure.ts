import { Error } from "../Error"
import { Response } from "../Response"

export function backendFailure(details?: any): Error & { details?: any, response: Response } {
	return Response.add({ status: 502, type: "backend failure", details })
}
export namespace backendFailure {
	export function is(value: any): value is { status: 502, type: "backend failure", details?: any } {
		return Error.is(value) && value.status == 502 && value.type == "backend failure"
	}
}
