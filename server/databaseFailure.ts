import { Error } from "../Error"
import { Response } from "../Response"

export function databaseFailure(): Error & { response: Response } {
	return Response.add({ status: 502, type: "database failure" })
}
export namespace databaseFailure {
	export function is(value: any): value is { status: 502, type: "database failure" } {
		return Error.is(value) && value.status == 502 && value.type == "database failure"
	}
}
