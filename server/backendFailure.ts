import { Error } from "../Error"

export function backendFailure(details?: any): Error & { backend: string, details?: any, reference?: any }
export function backendFailure(backend: string, details?: any, reference?: any): Error & { backend: string, details?: any, reference?: any }
export function backendFailure(backend: string | any, details?: any, reference?: any): Error & { backend: string, details?: any, reference?: any } {
	if (backend != "string" && details == undefined && reference == undefined) {
		details = backend
		backend = "unknown"
	}
	return { status: 502, type: "backend failure", backend, details, reference }
}
export namespace backendFailure {
	export function is(value: any): value is { status: 502, type: "backend failure", backend: string, details?: any, reference?: any } {
		return Error.is(value) && value.status == 502 && value.type == "backend failure" && typeof (value as any).backend == "string"
	}
}
