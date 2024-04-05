const Filter = (props) => {

    return (
      <div>
              Search: 
              <input 
                value= {props.phrase} 
                onChange={
                  event => 
                  { 
                    props.handleChange(event.target.value)
                  }
                }
             />
            </div>
    )
    }

    export default Filter