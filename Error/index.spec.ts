import * as gracely from "../index"

describe("Error tests", () => {
	it("Simple test", () => {
		const error = {
  		"status": 400,
  		"type": "invalid content",
  		"content": {
    		"type": "ip",
    		"description": "Missing information in risk mitigation."
  		},
 	 		"error": "invalid input"
		}
	expect(gracely.Error.is(error)).toBeTruthy()
	})
})
