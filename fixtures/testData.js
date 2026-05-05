
export class testData{
    users={
        standard_user:{
            username:'standard_user',
            password:'secret_sauce'
        },
        locked_user:{
            username:'locked_out_user',
            password:'secret_sauce'
        },
        problem_user:{
            username:'problem_user',
            password:'secret_sauce'
        },

        invalid_user:{
            username:'wrong_user',
            password:'wrong_password'
        },

        blank_username:{
            username: '',
            password: 'secret_sauce'
        },

        blank_password:{
            username: 'standard_user',
            password: ''
        },

        null_user_pass:{
            username: '',
            password: ''
        }
        
    }

    products={
        backpack: 'Sauce Labs Backpack',
        bikeLight: 'Sauce Labs Bike Light',
        boltTShirt: 'Sauce Labs Bolt T-Shirt',
        fleeceJacket: 'Sauce Labs Fleece Jacket',
        onesie: 'Sauce Labs Onesie',
        tShirtRed: 'Test.allTheThings() T-Shirt (Red)'
    }

    sortOptions={
        nameAZ: 'az',
        nameZA:'za',
        pricelohi:'lohi',
        pricehilo: 'hilo'
    }

    checkoutinfo={
        valid:{
            firstName: 'dilruba',
            lastName: 'akter',
            postalCode: '1230'
        },

        missingFirstName:{
            firstName: '',
            lastName: 'akter',
            postalCode: '1230'
        },

        missingLastName:{
            firstName: 'dilruba',
            lastName: '',
            postalCode: '1230'
        },

        missingPostalCode:{
            firstName: 'dilruba',
            lastName: 'akter',
            postalCode: ''
        },

        blankAllField:{
            firstName: '',
            lastName: '',
            postalCode: ''
        }
        
    }



    
    url= 'https://www.saucedemo.com';
    
}