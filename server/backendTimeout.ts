import { Error } from "../Error"
import { Response } from "../Response"

export function backendTimeout(): Error & { response: Response } {
	return Response.add({ status: 504, type: "backend timeout" })
}
export namespace backendTimeout {
	export function is(value: any): value is { status: 504, type: "backend timeout" } {
		return Error.is(value) && value.status == 504 && value.type == "backend timeout"
	}
}
