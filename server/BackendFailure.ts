import { Error } from "../Error"
import { Result } from "../Result"

export interface BackendFailure extends Error {
	status: 502
	type: "backend failure"
	backend: string
	details?: any
	reference?: any
	error?: string
}

export function backendFailure(details?: any): BackendFailure
export function backendFailure(backend: string, details?: any, reference?: any, error?: string): BackendFailure
export function backendFailure(backend: string | any, details?: any, reference?: any, error?: string): BackendFailure {
	if (backend != "string" && details == undefined && reference == undefined && error == undefined) {
		details = backend
		backend = "unknown"
	}
	return { status: 502, type: "backend failure", backend, details, reference, error }
}

export namespace BackendFailure {
	export function is(value: any): value is BackendFailure {
		return (
			typeof value == "object" &&
			value.status == 502 &&
			value.type == "backend failure" &&
			typeof value.backend == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
