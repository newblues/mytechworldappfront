import React, { Component } from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";

import {connect} from 'react-redux';


const style = {
  container: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    marginBottom : '20px',
    textAlign: 'center'
  },
  cardText:{
    color: 'black',
    textAlign: 'center',
  },
  cardTitle:{
    fontWeight: 'bold',
  },
    cardImg:{
    height: '150px',
    width: '150px',
    backgroundColor: '#FC5C57',
  },
  cardImgContainer:{
    padding: 20,
    width: '100%',
    backgroundColor: '#FC5C57',
  }
  
};

class Project extends Component {


  constructor(props){
    super(props)
    this.state = {
        like: false,
        moviesNameList: [],
      }
    }

    
  handleClickLikeOff() {
  
    console.log("I want to see all the films available")

    this.setState({
      viewOnlyLike: false
    })
  }

  handleClick(isLike, name) {
    // 1) First of all, we want to realize a copy of our state because it is an Array and we do not want to create a simple reference (for arrays and objects) but a real copy.
    var moviesNameListCopy = [...this.state.moviesNameList];

    // 2) If the movie is liked :
    if (isLike) {
      // 2.1) We want to push this specific movie and increment this.state.moviesCout
      moviesNameListCopy.push(name);
      this.setState({
        moviesCount: this.state.moviesCount+1,
        moviesNameList: moviesNameListCopy,
      })
    }
    // 3) If the movie is disliked :
    else {
      // 3.1) We want to target this specific movie, and then splice it
      var index = moviesNameListCopy.indexOf(name)
      moviesNameListCopy.splice(index, 1);
      this.setState({
        moviesCount: this.state.moviesCount-1,
        moviesNameList: moviesNameListCopy,
      })
    }
  }
  
  
  handleClickFavorite = () => {
    console.log('Click add favorite détecté------------------>', this.state.like)
    var isLike = !this.state.like;
    this.setState({
      like: isLike
    });
    this.props.handleClickParent(isLike, this.props.name);
 }

  render() {
    return (
      <Col xs="12" sm="6" md="4" lg="4">
          <Card style={style.container}>
          <div style={style.cardImgContainer}>
            <CardImg
              style={style.cardImg}
              top
              width="100%"
              src={this.props.pic_url}
              alt="Card image cap"
            />
          </div>
            <CardBody  style={style.container}>
              <CardTitle style={style.cardTitle}>{this.props.name}</CardTitle>
              <CardSubtitle>{this.props.desc}</CardSubtitle>

              <CardTitle style={style.cardTitle}>Stack Front</CardTitle>
              <h6><Badge color="secondary">{this.props.stack_front}</Badge></h6>


              <CardTitle style={style.cardTitle}>Stack Back</CardTitle>
              <h6><Badge color="secondary">{this.props.stack_back}</Badge></h6>

              <CardTitle style={style.cardTitle}>{this.props.days_spent} days spent</CardTitle>

             
              {/* <CardText style={style.cardText}>{this.props.desc}</CardText> */}
              
              <Button onClick={this.props.onFavoriteClick} outline color="secondary"> 
                + Favorite
              </Button>
            </CardBody>
          </Card>
      </Col>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
   onFavoriteClick: function() { 
     dispatch( {type: 'addFavorite'} ) 
   }
  }
 }
 
 export default connect(
   null, 
   mapDispatchToProps
 )(Project);
