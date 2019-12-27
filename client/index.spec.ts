import * as gracely from "../index"

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
	it("missing property w/ description", () => {
		const e = gracely.client.missingProperty("property", "string", "description of property")
		expect({ ...e, response: undefined }).toEqual({
			status: 400,
			type: "missing property",
			content: {
				property: "property",
				type: "string",
				description: "description of property",
			},
			response: undefined,
		})
	})
	it("missing property w/ object", () => {
		const e = gracely.client.missingProperty("property", "string", { url: "http://example.com", key: "abcdef" })
		expect({ ...e, response: undefined }).toEqual({
			status: 400,
			type: "missing property",
			content: {
				property: "property",
				type: "string",
				url: "http://example.com",
				key: "abcdef",
			},
			response: undefined,
		})
	})
})
