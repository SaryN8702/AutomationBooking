/// <reference types="Cypress"/>

describe('Search and book', function(){
    this.beforeEach(()=>{
        cy.visit('https://www.ryanair.com/gb/en')
    })

    it('Search a trip and book it', function(){
        cy.get('#input-button__departure').clear().type('lisbon').wait(300)
        cy.get('.tooltip-inner').contains('Portugal').click()
        cy.get('.airports__airports-list').contains('Lisbon').click()   
        cy.get('#input-button__destination').type('Paris').wait(300)  
        cy.get('.airports__airports-list').contains('Paris Beauvais').click()
        cy.get('.m-toggle__month').contains('Dec').click({force: true}).wait(200)  
        cy.get('.calendar-body__cell').contains('6').click({force: true}).wait(200)
        cy.get('.m-toggle__month').contains('Jan').click({force: true}).wait(200)
        cy.get('.calendar-body__cell').contains('2').click({force: true}).wait(200)
        cy.get('[data-ref="passengers-picker__adults"]').find('.counter__button-wrapper--enabled').click({force: true}).wait(200)
        cy.get('[data-ref="passengers-picker__children"]').find('.counter__button-wrapper--enabled').click({force: true})
        cy.get('[data-ref="flight-search-widget__cta"]').click({force: true})
  
    })

    it('Edit data', function(){
        cy.visit('https://www.ryanair.com/gb/en/trip/flights/select?adults=2&teens=0&children=1&infants=0&dateOut=2020-12-06&dateIn=2021-01-02&isConnectedFlight=false&isReturn=true&discount=0&promoCode=&originIata=LIS&destinationIata=BVA&tpAdults=2&tpTeens=0&tpChildren=1&tpInfants=0&tpStartDate=2020-12-06&tpEndDate=2021-01-02&tpDiscount=0&tpPromoCode=&tpOriginIata=LIS&tpDestinationIata=BVA"')
        cy.get('.ng-tns-c35-10').find('.carousel-next').click({force: true})
        cy.get('.ng-trigger-listSlide').contains(' Friday ').click({force: true})
        //cy.get('[data-ref="2020-12-11"]').contains('11 Dec').click({force: true})
        cy.get('.ng-tns-c33-9').find('.card-header').click({force: true}).wait(300)
        //cy.get('.fare-card--selected').contains('Continue with Value fare').click({force: true})
        cy.reload().wait(300)
        cy.get('.ng-tns-c35-13').find('.carousel-next').click({force: true})
        cy.get('[data-ref="2021-01-05"]').click({force: true}) 
        cy.get('.ng-tns-c33-12').find('.card-header').click({force: true}).wait(300)
        //cy.get('.fare-card-container').within(()=>{
            //cy.get('.fare-card-item__component').contains('Regular').click({force: true})
            //cy.get('.fare-confirmation__button--yes').click().wait(200)
            //cy.get('.login-touchpoint__login-later').click({force: true})
            //cy.get(':nth-child(2)').find('.dropdown__toggle').click({force: true})
            //cy.get('.name').type('Sónia')
            //cy.get('.surname').type('Pereira')
            
           //})
        
        
        //.contains('Continue with Value fare').dblclick({force: true}).wait(300)
        
        //cy.get('.login-touchpoint__login-later').should('be.visible')
    
    })
  
    //.find('#svg/takeover-icon').click({force: true})
    
    //cy.get('.counter__button-wrapper--enabled').click()
        
    
})


 //.contains('Portugal').click() 
            //cy.get('#input-button__destination').type('Paris')
            //cy.get('.airports__airports-list').contains('Lisbon').click()