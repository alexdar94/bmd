import React, { Fragment } from 'react';
import {
  Grid, Menu, Button, Input, Header, Responsive,
} from 'semantic-ui-react';
import { Formik, Field } from 'formik';
import { Redirect } from 'react-router-dom';
import isInt from 'validator/lib/isInt';
import { Space } from '../components';

class QuestionForm extends React.Component {
  state = { showMessage: false };

  renderInput = (i, title, names) => (
    <Fragment key={i}>
      <Grid>
        <Grid.Column width={2} style={questionFormStyles.label}>{title}</Grid.Column>
        {names.map(n => (
          <Field
            key={n}
            name={n}
            render={({ field, form }) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <Grid.Column width={7}>
                  <Input
                    {...field}
                    autoComplete="off"
                    value={(value !== undefined && value !== null) ? value : ''}
                    onFocus={() => this.setState({ showMessage: false })}
                    onChange={({ target: { value } }) => {
                      const char = value[value.length - 1];
                      if (['N', 'P', 'Z', 'n', 'p', 'z'].includes(char)) return setFieldValue(n, char.toUpperCase());
                    }}
                    style={questionFormStyles.input}
                  />
                </Grid.Column>
              );
            }}
          />
        ))}
      </Grid>
      <Space />
    </Fragment>
  );

  render() {
    const { inputs, handleSubmit, errors } = this.props;
    const { showMessage } = this.state;
    const noOfErrors = Object.keys(errors).length;
    const correct = noOfErrors === 0;
    return (
      <form onSubmit={handleSubmit}>
        <Header as="h4">Please input: P (Positive), N (Negative), Z (Zero)</Header>
        <Space />
        {inputs.map(({ title, names }, i) => this.renderInput(i, title, names))}
        <Button type="submit" onClick={() => this.setState({ showMessage: true })}>Test solution</Button>
        {showMessage && !correct && <div style={questionFormStyles.success}>You have {noOfErrors} mistakes.</div>}
        {showMessage && correct && <div style={questionFormStyles.error}>You got all correct!</div>}
      </form>
    );
  }
}

const questionFormStyles = {
  label: {
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '100%',
  },
  success: {
    margin: '8px 0',
    color: 'red',
  },
  error: {
    margin: '8px 0',
    color: 'green',
  },
};

const Question = ({ question, ...formProps }) => {
  const QuestionSvg = question.image;
  const { values } = formProps;
  return (
    <Grid container stackable style={{ height: '90%' }}>
      <Grid.Row>
        <Grid.Column width={10}>
          <QuestionSvg {...values} />
        </Grid.Column>
        <Grid.Column width={6} style={{ display: 'flex', alignItems: 'center' }}>
          <QuestionForm inputs={question.inputs} {...formProps} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const QuestionContainer = ({ question }) => (
  <Formik
    key={question.id}
    validate={(values) => {
      const errors = {};
      Object.keys(question.answer).forEach((k) => {
        if (values[k] !== question.answer[k]) errors[k] = 'error';
      });
      return errors;
    }}
    onSubmit={() => {}}
  >
    {props => <Question {...props} question={question} />}
  </Formik>
);

const QuestionLayout = ({ questions, history, match: { params: { id } } }) => {
  if (!isInt(id) || id < 1 || id > questions.length) return <Redirect to="/" />;
  const curr = id - 1;
  const hasPrev = curr - 1 > -1;
  const hasNext = curr + 1 < questions.length;
  const question = questions[curr];
  return (
    <div style={{ height: '100vh' }}>
      <Menu size="large" style={{ backgroundColor: '#F4F2EE', borderRadius: 0, border: 'none' }}>
        <Responsive className="menu-header" minWidth={441}>
          <Menu.Item href="/" header>Bending Moment Diagram</Menu.Item>
        </Responsive>
        <Responsive className="menu-header" maxWidth={440}>
          <Menu.Item href="/" header>BMD</Menu.Item>
        </Responsive>
        <Menu.Item onClick={() => history.push('/')}>Home</Menu.Item>
        {hasPrev && <Menu.Item onClick={() => history.push(`${curr}`)}>Previous</Menu.Item>}
        {hasNext && <Menu.Item position="right" onClick={() => history.push(`${curr + 2}`)}>Next</Menu.Item>}
      </Menu>
      <QuestionContainer question={question} />
    </div>
  );
};

export default QuestionLayout;
