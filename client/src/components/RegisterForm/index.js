import React from 'react'


export default function RegisterForm() {
    return (
<form className="container">
<div className="form-group">
<label for="exampleInputEmail1">First Name</label>
<input type="email" className="form-control text-left" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className="form-group">
<label for="exampleInputEmail1">Last Name</label>
<input type="email" className="form-control text-left" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className="form-group">
<label for="exampleInputEmail1">Email Address</label>
<input type="email" className="form-control text-left" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div className="form-group">
<label for="exampleInputPassword1">Position</label>
<input type="position" className="form-control text-left" id="exampleInputPassword1"/>
</div>
<div className="form-group form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" for="exampleCheck1">Admin</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>

    )
}