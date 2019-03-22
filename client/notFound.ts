import { Error } from "../Error"
import { Response } from "../Response"

export function notFound(): Error & { response: Response } {
	return Response.add({ status: 404, type: "not found" })
}
export namespace notFound {
	export function is(value: any): value is { status: 404, type: "not found" } {
		return Error.is(value) && value.status == 404 && value.type == "not found"
	}
}
