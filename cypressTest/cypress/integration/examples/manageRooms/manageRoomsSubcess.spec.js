describe('manageRooms', () => {

    it('host', () => {
        cy.visit('http://localhost:4200/')
    })

    it('login', () =>{
        cy.get('input[name=username]').type("admin")
        cy.get('input[name=password]').type("12345678")
        cy.get(':nth-child(4) > .btn').click()
    })

    it('clickManageRooms', () => {
        cy.get('[href="#menuStaff"]').click()
        cy.get('#menuStaff > :nth-child(3) > a').click()
        cy.get('#menuStaff > .dropdown-toggle').click()
        cy.get(':nth-child(4) > a').click()
    })

     it('insert', () => {
        cy.get('.btn-outline-success').click()
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form.ng-untouched > :nth-child(1) > .form-control').select('วิศวะกรรมศาสตร์')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > .ng-invalid.ng-dirty > :nth-child(2) > .form-control').type('5t-03')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > .ng-invalid.ng-dirty > :nth-child(3) > .form-control').type('70')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > .ng-invalid.ng-dirty > :nth-child(4) > .form-control').type('ว่าง')
        cy.get('.modal-content > .modal-footer > .btn-success').click()
    }) 

      it('update', () => {
        cy.get(':nth-child(6) > .btn').click()
        cy.wait(500)
        cy.get('#exampleModal3 > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > :nth-child(4) > .form-control').clear()
        cy.get('#exampleModal3 > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > :nth-child(4) > .form-control').type('ไม่ว่าง')
        cy.get('form.ng-dirty > .modal-footer > .btn-success').click()
    }) 
    
     it('delete', () => {
        cy.get('label > input').click()
        cy.get('.btn-outline-danger').click()
    })
})