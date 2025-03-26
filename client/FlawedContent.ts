import { Error } from "../Error"
import { Flaw } from "../Flaw"
import { Result } from "../Result"

export interface FlawedContent extends Error {
	status: 400
	type: "flawed content"
	content: Flaw | false
	error?: string
}

export function flawedContent(content: Flaw | false, error?: string): FlawedContent {
	return { status: 400, type: "flawed content", content, error }
}

export namespace FlawedContent {
	export function is(value: any): value is FlawedContent {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "flawed content" &&
			(Flaw.is(value.content) || value.content === false) &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
}
