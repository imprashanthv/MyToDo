import React, { Component } from "react";

class Footer extends Component{


  render(){
    var style = {
      backgroundColor: "#F8F8F8",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%",
    };
    return(
      <div className="container">
        <div style={style}>
          Basic todo application built by<a href="https://imprashanthv.ml"> imprashanthv </a> using <i className="fab fa-react fa-spin"></i> and bootstrap
        </div>
      </div>
    );
  }
}


export default Footer;
