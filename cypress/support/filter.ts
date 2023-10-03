const RoleFilter = (definedTags: string[], runTest: Function) => {
	if (Cypress.env('TAGS')) {
		const tags = Cypress.env('TAGS').split(',')
		const isFound = definedTags.some((definedTag) => tags.includes(definedTag))

		if (isFound) {
			runTest();
		}
	}
}

export default RoleFilter;
