import { Result } from "../Result"

export interface BackendFailure {
	status: 502
	type: "backend failure"
	backend: string
	details?: any
	reference?: any
	error?: string
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
	export function create(details?: any): BackendFailure
	export function create(backend: string, details?: any, reference?: any, error?: string): BackendFailure
	export function create(backend: string | any, details?: any, reference?: any, error?: string): BackendFailure {
		if (backend != "string" && details == undefined && reference == undefined && error == undefined) {
			details = backend
			backend = "unknown"
		}
		return { status: 502, type: "backend failure", backend, details, reference, error }
	}
}
