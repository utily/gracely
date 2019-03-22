import * as gracely from ".."

describe("client", () => {
	it("missing query argument", () => {
		const e = gracely.client.missingQueryArgument("argument", "string", "description of argument")
		expect({ ...e, response: undefined }).toEqual({
			status: 400,
			type: "missing query argument",
			argument: {
				name: "argument",
				type: "string",
				description: "description of argument",
			},
			response: undefined,
		})
	})
})
