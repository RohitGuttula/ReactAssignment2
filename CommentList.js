import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component{
    render(){
        let commentNodes= this.props.comments.map(comment => (
            <Comment ID={comment.id}
                     ProductName={comment.ProductName} 
                     Quantity={comment.Quantity}
                     Price={comment.Price} >   
            </Comment> 
        ));
        return(
            <>
            <div>  
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {commentNodes}
                </tbody>
            </table>
            </div>
            </>
        );
    }
}