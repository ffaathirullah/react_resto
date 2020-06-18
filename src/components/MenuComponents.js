import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import DishDetails from './DishdetailComponent ';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
         }
        }

        onDishSelect(dish) {
          this.setState({ selectedDish: dish });
        }

        renderDish(dish) {
          if (dish != null) return <DishDetails dish={dish} />;
          else return <div />;
        }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                </div>
                {this.renderDish(this.state.selectedDish)}
                </div>    
        );
    }
}
export default Menu;
