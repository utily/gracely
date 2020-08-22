import { Result } from "../Result"
import { Response } from "../Response"
import * as success from "../success"

export function post(
	location: string,
	data: { [property: string]: string }
): Result & { body: string; response: Response } {
	return success.ok(`<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
		<form action="post" target="${location}">
			${Object.keys(data).map(property => `<input name="${property} value="${data[property]}" />`)}
		</form>
	</body>
</html>`)
}
export namespace post {
	export function is(value: any): value is { status: 200; location: string } {
		return Result.is(value) && value.status == 200
	}
}
