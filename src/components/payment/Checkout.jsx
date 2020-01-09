import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import {CheckoutForm} from './CheckoutForm'

const Checkout = ({ selectedProduct }) => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    return (
      <StripeProvider apiKey="pk_test_j7KlMPUXrrTh3PpKNZRzhRfD00F7l2qfRy">
        <Elements>
          <CheckoutForm selectedProduct={selectedProduct} />
        </Elements>
      </StripeProvider>
    )
}

export default Checkout