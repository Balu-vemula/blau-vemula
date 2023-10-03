// / <reference types="Cypress" />

export abstract class BaseEyes {
	seesTextWithId(id: string, text: string) {
		cy.get(`#${id}`).should('have.text', text)
		return this
	}

	doesNotseesTextWithId(id: string, text: string) {
		cy.get(`#${id}`).should('not.have.text', text)
		return this
	}

	seesIdVisible(id: string) {
		cy.get(`#${id}`).should('be.visible')
		return this
	}

	doesNotseesIdVisible(id: string) {
		cy.get(`#${id}`).should('not.be.visible')
		return this
	}

	seesTextWithClass(domClass: string, text: string) {
		cy.get(`.${domClass}`).should('have.text', text)
		return this
	}
	seesTextWithDom(Dom: string, text: string) {
		cy.get(Dom).should('have.text', text)
	}

	seesDomVisibleWithCustomMatcher(domlabel: string, matcher: string) {
		cy.get(`[${domlabel}="${matcher}"]`).should('be.visible')
		return this
	}

	seesDomVisible(domlabel: string) {
		cy.get(domlabel).should('be.visible')
		return this
	}

	seesTextInChildDom(parentDom: string, childDom: string, text: string) {
		cy.get(`${parentDom} ${childDom}`).should('contain', text)
		return this
	}

	seesTextWithClassAndIndex(domClass: string, index: number, text: string) {
		cy.get(`.${domClass}`).eq(index).should('have.text', text)
		return this
	}

	sessTextWithDomAndIndex(dom: string, index: number, text: string) {
		cy.get(dom).eq(index).should('have.text', text)
		return this
	}

	hasLengthForDomWithClass(domClass: string, length: number) {
		cy.get(`.${domClass}`).should('have.length', length)
		return this
	}

	hasLengthForDom(parentDomClass: string, childDom: string, length: number) {
		cy.get(parentDomClass).find(childDom).should('have.length', length)
		return this
	}

	seesDomContainText(dom: string, text: string) {
		cy.get(dom).should('contain', text)
		return this
	}

	doesNotseesDom(dom: string) {
		cy.get(dom).should('not.be.visible')
		return this
	}

	seesTextInAgGridCell(rowId: string, colId: string, text: string) {
		cy.get(`[row-id=${rowId}]`)
			.find(`[col-id=${colId}]`)
			.should('have.text', text)
		return this
	}

	seesAgGridColumnSelected(rowId: string, colId: string) {
		cy.get(`[row-id=${rowId}]`)
			.find(`[col-id=${colId}]`)
			.should('have.class', 'ag-cell-range-selected')
		return this
	}

	seesAgGridRowSelected(rowIndexId: string) {
		cy.get(`[aria-rowindex=${rowIndexId}]`).should(
			'have.class',
			'ag-row-selected'
		)
		return this
	}

	seesMinimumNumberOfElementsInDom(
		dom: string,
		childDomClass: string,
		minimumLength: number
	) {
		cy.get(dom)
			.find(`.${childDomClass}`)
			.should('have.length.greaterThan', minimumLength)
		return this
	}

	seesNumberOfElementsInDom(
		dom: string,
		childDomClass: string,
		length: number
	) {
		cy.get(dom).find(`.${childDomClass}`).should('have.length', length)
		return this
	}

	seesPathNameInUrl(path: string) {
		cy.location('pathname').should('eq', path)
		return this
	}

	seesFullPathNameWithQueryParams(path: string) {
		const HOST = Cypress.env('APP_URL')
		cy.location('href').should('eq', `${HOST}/${path}`)
		return this
	}

	seesDomDisabled(dom: string) {
		cy.get(dom).should('be.disabled')
		return this
	}
	wait(milliSecs: number) {
		cy.wait(milliSecs)
		return this
	}
	seesDomEnabled(dom: string) {
		cy.get(dom).should('not.be.disabled')
		return this
	}
	seesElementIsVisibleWhenTheOtherElementISPresent(dom1: string, dom2: string) {
		if (cy.get(dom1).should('be.visible')) {
			cy.get(dom1).should(() => {
				expect(dom1).to.be.a('string')
			})
			cy.get(dom2).should('be.visible')
		} else {
			cy.get(dom2).should('not.be.visible')
		}
	}
}

export class BaseHands {
	clickOnId(id: string) {
		cy.get(`#${id}`).click()
		return this
	}

	clickOnClass(domclass: string) {
		cy.get(`.${domclass}`).click()
		return this
	}

	clickOnText(text: string) {
		cy.contains(`${text}`).click()
		return this
	}
	clickOnCss(text: string) {
		cy.get(`${text}`).click()
		return this
	}
	scrollIntoElement(dom: string, index: number) {
		cy.get(`${dom}`).eq(index).scrollIntoView()
		return this
	}
	scrollIntoElementWithOutIndex(dom: string) {
		cy.get(`${dom}`).scrollIntoView()
		return this
	}
	clickOnAttribute(text: string) {
		cy.get(`[${text}]`).click()
		return this
	}
	navigatingToBack() {
		cy.go('back')
		return this
	}

	navigatingToSigningPage(id: string, text: string) {
		cy.get(`#${id}`).trigger('mouseover')
		cy.get(`${text}`).click()
		return this
	}

	navigatingToYourAccount(id: string, text: string) {
		cy.get(`#${id}`).trigger('mouseover')
		cy.get(`${text}`).click()
	}

	selectFilter(text: string, id: string) {
		cy.get(`${text}`).click()
		cy.get(`#${id}`).click()
	}
	doubleClickOnId(id: string) {
		cy.get(`#${id}`).dblclick()
		return this
	}

	doubleClickAndDragOnAgGrid(rowId: string, colId: string) {
		cy.get(`[row-id=${rowId}]`)
			.find(`[col-id=${colId}]`)
			.trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
			.trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
			.trigger('mouseup', { which: 1, pageX: 600, pageY: 6000 })
		return this
	}

	clickOnDomElement(dom: string) {
		cy.get(dom).click()
		return this
	}

	typeTextonDom(locatorName: string, locatorValue: string, text: string) {
		cy.get(`[${locatorName}="${locatorValue}"]`).type(text, { force: true })
		return this
	}
	typeTextOnDomElement(dom: string, text: any) {
		cy.get(dom).type(text)
		return this
	}

	typeTextonDomAfterClickWithIndex(
		locatorName: string,
		locatorValue: string,
		text: string,
		index: any
	) {
		cy.get(`[${locatorName}="${locatorValue}"]`)
			.eq(index)
			.click({ force: true })
			.type(text, { force: true })
	}

	typeTextonDomAfterClick(
		locatorName: string,
		locatorValue: string,
		text: string
	) {
		cy.get(`[${locatorName}="${locatorValue}"]`)
			.click({ force: true })
			.type(text, { force: true })
		return this
	}

	typeTextonId(id: string, text: string) {
		cy.get(`#${id}`, { timeout: 10000 }).type(text)
		return this
	}

	clickOnChildDom(parentId: string, dom: string, index: number) {
		cy.get(`#${parentId} ${dom}`).eq(index).click()
		return this
	}
	clickOnDomElementWithIndex(dom: string, index: number) {
		cy.get(`${dom}`).eq(index).click()
		return this
	}

	ClickOnTextWithClassAndIndex(domClass: string, index: number) {
		cy.get(`[class=${domClass}]`).eq(index).click()
		return this
	}

	scrollToWithClassName(domClass: string, direction: PositionType) {
		cy.get(`.${domClass}`).scrollTo(direction)
		return this
	}

	clickOnAgGridRow(rowId: string) {
		cy.get(`[row-id=${rowId}]`).find('.ag-selection-checkbox').click()
		return this
	}

	wait(milliSecs: number) {
		cy.wait(milliSecs)
		return this
	}
}

export class BaseDependencies {
	visitUrl(url: string) {
		const HOST = Cypress.env('APP_URL')
		cy.visit(`${HOST}${url}`)
		return this
	}

	accessUrl(url: string) {
		cy.visit(`${url}`)
		return this
	}
	wmLogin(
		url: string,
		userNameId: string,
		userName: string,
		passWordID: string,
		password: string,
		signInLocatorName: string,
		signInLocatorValue: string
	) {
		cy.visit(`${url}`)
		cy.viewport(1200, 900)
		cy.origin('https://qa-washmetrix.auth.us-east-1.amazoncognito.com', () => {
			cy.get(`#${userNameId}`).type(`${userName}`, { force: true })
			cy.get(`#${passWordID}`).type(`${password}`, { force: true })
			cy.wait(3000)
			cy.get(`[${signInLocatorName}="${signInLocatorValue}"]`).click({
				multiple: true,
				force: true,
			})
		})
		return this
	}
	washmetrixLogIn(url: string) {
		cy.visit(`${url}`)
		cy.window().then((win) => {
			win.sessionStorage.clear()
		})
		cy.viewport(1200, 900)
		cy.origin('https://qa-washmetrix.auth.us-east-1.amazoncognito.com', () => {
			cy.get('#signInFormUsername').type(Cypress.env('USER_NAME'), {
				force: true,
			})
			cy.get('#signInFormPassword').type(Cypress.env('PASSWORD'), {
				force: true,
			})
			cy.wait(3000)
			cy.get('[class="btn btn-primary submitButton-customizable"]').click({
				multiple: true,
				force: true,
			})
		})
		return this
	}
}

type PositionType =
	| 'topLeft'
	| 'top'
	| 'topRight'
	| 'left'
	| 'center'
	| 'right'
	| 'bottomLeft'
	| 'bottom'
	| 'bottomRight'
