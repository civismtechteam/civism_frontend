import  React from 'react'
import './FactSubmission.css'

class FactSubmission extends React.Component {

  render() {
    return (
      <div className="form-container">
        <form>
          <div className="form-item">
            <label htmlFor="fact">Submit a Fact</label>
          </div>
          <div className="form-item">
            <textarea id="subject" name="subject" placeholder="Write something...">
            </textarea>
          </div>
          <div className="form-item">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

// module.exports = App;
export default FactSubmission
