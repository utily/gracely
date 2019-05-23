import { Error } from "../Error"
import { Response } from "../Response"

export function unauthorized(): Error & { response: Response } {
	return Response.add({ status: 401, type: "not authorized" })
}
export namespace unauthorized {
	export function is(value: any): value is { status: 401, type: "not authorized" } {
		return Error.is(value) && value.status == 401 && value.type == "not authorized"
	}
}
