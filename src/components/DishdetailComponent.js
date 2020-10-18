import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderDish({dish}){
        if (dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return (<div></div>);
        }
    }

    function RenderComments({dish}){
        
        if (dish != null){
            const comments = dish.comments.map((com) => {
                return(
                    <li key={com.id}>
                        <p>{com.comment}</p>
                        <p>-- {com.author}, {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric"  }).format(new Date(com.date))}</p>
                    </li>
                    
                    
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else{
            return (<div></div>);
        }
    }

    const DishDetail = (props) => {
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
            

        );
    }


export default DishDetail;
