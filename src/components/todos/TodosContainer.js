// ./src/components/todos/TodosContainer.js
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map(
                            (todo, id) =>
                            <Todo delete={this.props.delete}
                                  key={id}
                                  todo={todo} />
                        )

  render() {
    return(
        <div>
          {this.renderTodos()}
        </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todo_id => dispatch({type: 'DELETE_TODO', id: todo_id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
