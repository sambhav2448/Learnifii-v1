import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import "./rte.css"
 
class MyEditor extends Component {
 
  state = {
    value: RichTextEditor.createEmptyValue()
  }
 
  onChange = (value) => {
    this.setState({value});
    
    
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.onChange={()=>{this.props.rtefunc(this.state.value)}}
    if (this.props.onChange) { 
      this.props.onChange(
        value.toString('html')
      );
    }
    // console.log(this.state.value.toString("html"))
  };
 
  render () {
    return (
      <div >
      <RichTextEditor
      placeholder="Enter class description here.."
        value={this.state.value}
        onChange={this.onChange}
      />
      </div>
    );
  }
}

export default MyEditor;