describe('manageEmployees', function () {

    it('updateEmailไม่ถูกต้อง', function () {
        cy.visit('http://localhost:4200/')
        cy.get('.card-body > .p-5 > .user > .form-group > #username').click()
        cy.get('.card-body > .p-5 > .user > .form-group > #username').type('admin')
        cy.get('.card-body > .p-5 > .user > .form-group > #password').type('12345678')
        cy.get('.card-body > .p-5 > .user > .form-group > .btn').click()
        cy.get('.wrapper > #sidebar > .list-unstyled > .nav-item:nth-child(2) > .dropdown-toggle').click()
        cy.get('.list-unstyled > .nav-item > #menuStaff > li > a').click()
        cy.get('#just_a_table > tbody > tr:nth-child(1) > td > .btn').click()
        cy.wait(500)
        cy.get('#modalEdit > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > :nth-child(1) > .col > :nth-child(5) > .col-sm-9 > .form-control').clear()
        cy.get('#modalEdit > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > :nth-child(1) > .col > :nth-child(5) > .col-sm-9 > .form-control').click()
        cy.get('#modalEdit > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > :nth-child(1) > .col > :nth-child(5) > .col-sm-9 > .form-control').type('aaa!gmail.com')
        cy.get('#modalEdit > .modal-dialog > .modal-content > .modal-body > form.ng-dirty > .modal-footer > .btn-primary').click()
        cy.get('.invalid-feedback > div').should(($div) => {
            expect($div).to.contain('กรุณากรอกอีเมล์ให้ถูกต้อง')
          }) 
    })

})
