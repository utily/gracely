import z from "zod"
import * as gracely from "./index"

type Date = z.infer<typeof Date.validator>
namespace Date {
	export const validator = z.string().regex(/(^\d{4}-(0[13-9]|1[012])-([012]\d|30|31)$)|^\d{4}-02-([012]\d)$/)
	export function is(value: any): value is Date {
		return validator.safeParse(value).success
	}
	export const flaw = gracely.Flaw.generate("Date string", Date.validator)
}

type Example = z.infer<typeof Example.validator>

namespace Example {
	export function is(value: any): value is Example {
		return validator.safeParse(value).success
	}
	export const validator = z.object({
		anInteger: z.number().int(),
		anOptional: z.number().optional(),
		date: Date.validator,
		email: z.string().email(),
		starter: z.string().startsWith("left_"),
		test: z
			.object({
				deeper: z.boolean(),
			})
			.optional(),
	})
	export const flaw = gracely.Flaw.generate("model.Example", validator)
}

describe("Flaw tests", () => {
	it("Flaw self tests", () => {
		expect(gracely.Flaw.is({})).toBeFalsy()
		expect(gracely.Flaw.flaw({})).toEqual({
			flaws: [
				{
					condition: "Required",
					property: "type",
					type: "string",
				},
			],
			type: "gracely.Flaw",
		})
		const veryFlawedFlaw = {
			type: "example",
			flaws: [{ type: "example", flaws: [{ epyt: "reversed", flaws: true }] }],
		}
		expect(gracely.Flaw.is(veryFlawedFlaw)).toBeFalsy()
		expect(gracely.Flaw.flaw(veryFlawedFlaw)).toEqual({
			flaws: [
				{
					condition: "Required",
					property: "flaws.0.flaws.0.type",
					type: "string",
				},
				{
					condition: "Expected array, received boolean",
					property: "flaws.0.flaws.0.flaws",
					type: "array",
				},
			],
			type: "gracely.Flaw",
		})
	})
	it("Flaw.generate tests", () => {
		const example: Example = {
			anInteger: 1,
			date: "2022-01-31",
			email: "is@valid.mail",
			starter: "left_right",
		}
		const modified: Record<string, any> = { ...example }
		expect(Example.is(example)).toBeTruthy()
		expect(Example.flaw(example)).toEqual({
			type: "model.Example",
			flaws: [],
		})
		modified.email = "isn't valid email"
		modified.test = "test"
		expect(Example.is(modified)).toBeFalsy()
		expect(Example.flaw(modified)).toEqual({
			type: "model.Example",
			flaws: [
				{
					condition: "Invalid email",
					property: "email",
					type: "email",
				},
				{
					condition: "Expected object, received string",
					property: "test",
					type: "object",
				},
			],
		})
		modified.email = "is@valid.mail"
		modified.test = { deeper: true }
		modified.starter = "right_left"
		expect(Example.is(modified)).toBeFalsy()
		expect(Example.flaw(modified)).toEqual({
			type: "model.Example",
			flaws: [
				{
					condition: 'Invalid input: must start with "left_"',
					property: "starter",
					type: '{"startsWith":"left_"}',
				},
			],
		})
		modified.test.deeper = "true"
		expect(Example.is(modified)).toBeFalsy()
		expect(Example.flaw(modified)).toEqual({
			type: "model.Example",
			flaws: [
				{
					condition: 'Invalid input: must start with "left_"',
					property: "starter",
					type: '{"startsWith":"left_"}',
				},
				{
					condition: "Expected boolean, received string",
					property: "test.deeper",
					type: "boolean",
				},
			],
		})
		modified.starter = "left_something"
		modified.test.deeper = 1
		modified.date = "2022-02-30"
		expect(Example.is(modified)).toBeFalsy()
		expect(Example.flaw(modified)).toEqual({
			type: "model.Example",
			flaws: [
				{
					condition: "Invalid",
					property: "date",
					type: "regex",
				},
				{
					condition: "Expected boolean, received number",
					property: "test.deeper",
					type: "boolean",
				},
			],
		})
	})
})
