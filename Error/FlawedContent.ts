import { Flaw } from "../Flaw"
import { Result } from "../Result"

export interface FlawedContent {
	status: 400
	type: "flawed content"
	content: Flaw
	error?: string
}

export namespace FlawedContent {
	export function is(value: any): value is FlawedContent {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "flawed content" &&
			Flaw.is(value.content) &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
	export function create(content: Flaw, error?: string): FlawedContent {
		return { status: 400, type: "flawed content", content, error }
	}
}
