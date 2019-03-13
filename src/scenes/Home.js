import React, { Component } from 'react';
import {
  Container,
  Header,
  Grid,
  Card,
  Responsive,
} from 'semantic-ui-react';

export default class Home extends Component {
  render() {
    return (
      <Container className="home" style={styles.container}>
        <Grid columns={3} stackable>
          <Responsive minWidth={441} as="h1" style={{ ...styles.header, transform: 'translateY(-100%)', fontSize: '2.5rem' }}>Bending Moment Diagram</Responsive>
          <Responsive maxWidth={440} as="h1" style={{ ...styles.header, transform: 'translateY(-50%)' }}>BMD</Responsive>
          <Grid.Column>
            <Card href="easy/1" style={styles.card}>
              <Header as="h1" content="Easy" />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card href="normal/1" style={styles.card}>
              <Header as="h1" content="Normal" />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card href="hard/1" style={styles.card}>
              <Header as="h1" content="Hard" />
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${require('../assets/images/background.gif')})`,
    backgroundPosition: 'center',
  },
  header: {
    width: '100%',
    textAlign: 'center',
  },
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: '20vh',
    maxHeight: '40vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
