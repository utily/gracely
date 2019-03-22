import { Error } from "../Error"
import { Response } from "../Response"

export function databaseTimeout(): Error & { response: Response } {
	return Response.add({ status: 504, type: "database timeout" })
}
export namespace databaseTimeout {
	export function is(value: any): value is { status: 504, type: "database timeout" } {
		return Error.is(value) && value.status == 504 && value.type == "database timeout"
	}
}
