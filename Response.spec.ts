import * as gracely from "./index"

describe("Response", () => {
	it("302", () => expect(gracely.redirect.found("http://example.com").response).toEqual({
		status: 302,
		headers: { location: "http://example.com" },
		body: undefined,
	}))
})
