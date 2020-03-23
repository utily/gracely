import { Error } from "../Error"

export function missconfigured(key: string, description: string): Error & { key: string, description: string } {
	return { status: 503, type: "missing configuration", key, description }
}
export namespace missconfigured {
	export function is(value: any): value is { status: 503, type: "missing configuration", details?: any } {
		return Error.is(value) && value.status == 503 && value.type == "missing configuration"
	}
}
