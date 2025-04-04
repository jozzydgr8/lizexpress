
type buttonProps={
    title:string,
    onClick:()=>void
}

function FlatButton({title, onClick}:buttonProps) {
  return (
    <button className="btn" onClick={onClick}>{title}</button>
  )
}

export default FlatButton
