import "./Button.css";

function Button(props) {
  let classes = "btn " + props.className;
  console.log("button: ", props.title, classes)

  return (
    <div className={classes}>
      <button onClick={props.clicked} type={props.type}>
        {props.title}
      </button>
    </div>
  );
}

export default Button;
