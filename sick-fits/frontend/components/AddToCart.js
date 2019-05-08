import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_TO_CART_MUTATION = gql`
    mutation addToCart($id: ID!) {
        addToCart(id: $id) {
            id
            quantity
        }
    }
`;

class AddToCart extends React.Component {
    render() {
        const { id } = this.props;
        return <Mutation 
                mutation={ADD_TO_CART_MUTATION} 
                variables={{
                    id,
                }}
            >
                {addToCart => <button onClick={addToCart}>Add to Cart</button>}
            </Mutation> 
    }
}

export default AddToCart;