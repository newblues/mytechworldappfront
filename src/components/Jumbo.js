import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const style={
  container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100vw',
    height: 'calc(90vh - 50px)',

    background: 'url("https://res.cloudinary.com/da4pvqajx/image/upload/v1552322559/jumbotron.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  },
  button:{
    color: '#2E3337',
  },
}



const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron style={style.container}>
        <h1 className="display-3">My Tech World!</h1>
        <p className="lead">10 weeks to change my life</p>
        <hr className="my-2" />
        <p> 8 FullStack projects to learn how to code.</p>
        <p className="lead">
          <Button color="secondary">Discover my projects</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;