import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class PostSignup extends Component {

  render() {
    return (
      <>
        <h2>Tell us about yourself 🎈</h2>
        <form>
          <input type="text" name="fName" placeholder="First Name"/>
          <input type="text" name="lName" placeholder="Last Name"/>
          <input type="text" name="age" placeholder="Age"/>
          <input type="text" name="prefLang" placeholder="Preferred Language"/>
          <input type="text" name="specialReq" placeholder="Special Requirements"/>
          <label htmlFor="sex1">
            <input type="radio" id="sex1" name="sex" />Female
          </label>
          <label htmlFor="sex2">
            <input type="radio" id="sex2" name="sex" />Male
          </label>
          <label htmlFor="sex3">
            <input type="radio" id="sex3" name="sex" />Other
          </label>
          <label>
            Do you have insurance? <input type="checkbox" name="hasInsurance"/>
          </label>
          <Link to="/">Submit</Link>
        </form>
      </>
    )
  }
}

export default PostSignup


