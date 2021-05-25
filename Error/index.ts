import { Result } from "../Result"
import { BackendFailure as ErrorBackendFailure } from "./BackendFailure"
import { BackendTimeout as ErrorBackendTimeout } from "./BackendTimeout"
import { DatabaseFailure as ErrorDatabaseFailure } from "./DatabaseFailure"
import { DatabaseTimeout as ErrorDatabaseTimeout } from "./DatabaseTimeout"
import { FlawedContent as ErrorFlawedContent } from "./FlawedContent"
import { InvalidContent as ErrorInvalidContent } from "./InvalidContent"
import { InvalidPathArgument as ErrorInvalidPathArgument } from "./InvalidPathArgument"
import { InvalidQueryArgument as ErrorInvalidQueryArgument } from "./InvalidQueryArgument"
import { MalformedContent as ErrorMalformedContent } from "./MalformedContent"
import { MethodNotAllowed as ErrorMethodNotAllowed } from "./MethodNotAllowed"
import { Misconfigured as ErrorMisconfigured } from "./Misconfigured"
import { MissingProperty as ErrorMissingProperty } from "./MissingProperty"
import { MissingQueryArgument as ErrorMissingQueryArgument } from "./MissingQueryArgument"
import { NotFound as ErrorNotFound } from "./NotFound"
import { Unauthorized as ErrorUnauthorized } from "./Unauthorized"
import { Unavailable as ErrorUnavailable } from "./Unavailable"
import { Unknown as ErrorUnknown } from "./Unknown"

export interface Error extends Result {
	type: string
	error?: string
}
export namespace Error {
	export function is(value: any | Error): value is Error {
		return (
			typeof value == "object" &&
			typeof value.type == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value) &&
			value.status >= 400
		)
	}
	export type FlawedContent = ErrorFlawedContent
	export namespace FlawedContent {
		export const is = ErrorFlawedContent.is
		export const create = ErrorFlawedContent.create
	}
	export type BackendFailure = ErrorBackendFailure
	export namespace BackendFailure {
		export const is = ErrorBackendFailure.is
		export const create = ErrorBackendFailure.create
	}
	export type BackendTimeout = ErrorBackendTimeout
	export namespace BackendTimeout {
		export const is = ErrorBackendTimeout.is
		export const create = ErrorBackendTimeout.create
	}
	export type DatabaseFailure = ErrorDatabaseFailure
	export namespace DatabaseFailure {
		export const is = ErrorDatabaseFailure.is
		export const create = ErrorDatabaseFailure.create
	}
	export type DatabaseTimeout = ErrorDatabaseTimeout
	export namespace DatabaseTimeout {
		export const is = ErrorDatabaseTimeout.is
		export const create = ErrorDatabaseTimeout.create
	}
	export type Misconfigured = ErrorMisconfigured
	export namespace Misconfigured {
		export const is = ErrorMisconfigured.is
		export const create = ErrorMisconfigured.create
	}
	export type Unavailable = ErrorUnavailable
	export namespace Unavailable {
		export const is = ErrorUnavailable.is
		export const create = ErrorUnavailable.create
	}
	export type Unknown = ErrorUnknown
	export namespace Unknown {
		export const is = ErrorUnknown.is
		export const create = ErrorUnknown.create
	}
	export type InvalidContent = ErrorInvalidContent
	export namespace InvalidContent {
		export const is = ErrorInvalidContent.is
		export const create = ErrorInvalidContent.create
	}
	export type InvalidPathArgument = ErrorInvalidPathArgument
	export namespace InvalidPathArgument {
		export const is = ErrorInvalidPathArgument.is
		export const create = ErrorInvalidPathArgument.create
	}
	export type InvalidQueryArgument = ErrorInvalidQueryArgument
	export namespace InvalidQueryArgument {
		export const is = ErrorInvalidQueryArgument.is
		export const create = ErrorInvalidQueryArgument.create
	}
	export type MalformedContent = ErrorMalformedContent
	export namespace MalformedContent {
		export const is = ErrorMalformedContent.is
		export const create = ErrorMalformedContent.create
	}
	export type MethodNotAllowed = ErrorMethodNotAllowed
	export namespace MethodNotAllowed {
		export const is = ErrorMethodNotAllowed.is
		export const create = ErrorMethodNotAllowed.create
	}
	export type MissingProperty = ErrorMissingProperty
	export namespace MissingProperty {
		export const is = ErrorMissingProperty.is
		export const create = ErrorMissingProperty.create
	}
	export type MissingQueryArgument = ErrorMissingQueryArgument
	export namespace MissingQueryArgument {
		export const is = ErrorMissingQueryArgument.is
		export const create = ErrorMissingQueryArgument.create
	}
	export type NotFound = ErrorNotFound
	export namespace NotFound {
		export const is = ErrorNotFound.is
		export const create = ErrorNotFound.create
	}
	export type Unauthorized = ErrorUnauthorized
	export namespace Unauthorized {
		export const is = ErrorUnauthorized.is
		export const create = ErrorUnauthorized.create
	}
}
