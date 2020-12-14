import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}></span> {igKey}: {props.ingredients[igKey]}
            </li>
        });
    return (
        <Aux>
            <h3>Seu Pedido</h3>
            <p>Um delicioso sanduiche com os seguintes ingredientes:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total: {props.price.toFixed(2)}</strong></p>
            <p>Continuar para pagamento?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );

};

export default orderSummary;