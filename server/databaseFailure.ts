import { Error } from "../Error"
import { Response } from "../Response"

export function databaseFailure(details?: any): Error & { details?: any, response: Response } {
	return Response.add({ status: 502, type: "database failure", details })
}
export namespace databaseFailure {
	export function is(value: any): value is { status: 502, type: "database failure", details?: any } {
		return Error.is(value) && value.status == 502 && value.type == "database failure"
	}
}
