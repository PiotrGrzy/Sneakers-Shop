import React, { useState, useRef, useEffect } from 'react';

import './paypal.scss';

const PayPal = ({ order, user }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: order.description,
                amount: {
                  currency_code: 'USD',
                  value: order.price
                }
              }
            ],
            payer: {
              payer_id: user.id,
              name: { given_name: user.firstName, surname: user.lastName },
              email_address: user.email,
              address_portable: {
                address_line_1: user.street,
                admin_area_2: user.city,
                postal_code: user.postalCode,
                country_code: 'PL'
              }
            }
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        }
      })
      .render(paypalRef.current);
  }, [order.description, order.price]);

  if (paidFor) {
    return (
      <div className="paypal">
        <h1>Congrats, you just bought {order.name}!</h1>
      </div>
    );
  }

  return (
    <div className="paypal">
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <h1>You bought Some shit for ${order.price}</h1>
      <div ref={paypalRef} />
    </div>
  );
};

export default PayPal;
