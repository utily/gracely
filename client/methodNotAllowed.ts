import { Error } from "../Error"

const methods = ["GET", "POST", "DELETE", "HEAD", "PATCH", "PUT", "OPTIONS", "TRACE", "CONNECT"]
type Method = "GET" | "POST" | "DELETE" | "HEAD" | "PATCH" | "PUT" | "OPTIONS" | "TRACE" | "CONNECT"

export function methodNotAllowed(...allowed: Method[]): Error & { header: { allowed: Method[] } } {
	return { status: 405, type: "method not allowed", header: { allowed } }
}
export namespace methodNotAllowed {
	export function is(value: any): value is { status: 405, type: "method not allowed", header: { allowed: Method[] } } {
		return typeof value == "object" &&
			value.status == 405 &&
			value.type == "method not allowed" &&
			typeof value.header == "object" &&
			Array.isArray(value.header.allowed) &&
			value.header.allowed.every((m: any) => methods.some(m)) &&
			Error.is(value)
	}
}
