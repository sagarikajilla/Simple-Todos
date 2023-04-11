// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, onDeleteTodo} = props
  const {id, title} = details

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-cont">
      <p className="desc">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
