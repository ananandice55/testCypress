describe('manageBuilds', () => {

    it('host', () => {
        cy.visit('http://localhost:4200/')
    })

    it('login', () =>{
        cy.get('input[name=username]').type("admin")
        cy.get('input[name=password]').type("12345678")
        cy.get(':nth-child(4) > .btn').click()
    })

    it('clickManageBuilds', () => {
        cy.get('[href="#menuStaff"]').click()
        cy.get('#menuStaff > :nth-child(3) > a').click()
        cy.get('#menuStaff > .dropdown-toggle').click()
        cy.get(':nth-child(5) > a').click()
    })

    it('insert', () => {
        cy.get('.btn-outline-success').click()
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form.ng-untouched > :nth-child(1) > .form-control').type('วิทยาการสารสนเทศ')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > .ng-invalid.ng-dirty > :nth-child(2) > .form-control').type('120')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > .modal-footer > .btn-success').click()
    })

    it('update', () => {
        cy.get(':nth-child(2) > :nth-child(4) > .btn').click()
        cy.get(':nth-child(1) > #exampleModal3 > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > :nth-child(1) > .form-control').clear()
        cy.get(':nth-child(1) > #exampleModal3 > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > :nth-child(1) > .form-control').type('com-sci')
        cy.get(':nth-child(1) > #exampleModal3 > .modal-dialog > .modal-content > .modal-body > form.ng-touched > .modal-footer > .btn-success').click()
    })
    
    it('delete', () => {
        cy.get(':nth-child(2) > :nth-child(1) > label > input').click()
        cy.get('.btn-outline-danger').click()
    })
})