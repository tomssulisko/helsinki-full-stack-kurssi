const Filter = (props) => {

    return (
      <div>
              Search country: 
              <input 
                value = {props.phrase} 
                onChange = {
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