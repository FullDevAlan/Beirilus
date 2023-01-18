import "./EmployeeForm.style.css"

type Props = {
  onBackBtnClickHnd: () => void
}

const AddEmployee = (props: Props) => {
  const { onBackBtnClickHnd } = props
  return (
    <div className="form-container">
    <div>
      <h3> Add Employee Form</h3>
    </div>
      <form>
        <div>
          <label>First Name: </label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" />
        </div>
        <div>
          <label>E-Mail: </label>
          <input type="text" />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee