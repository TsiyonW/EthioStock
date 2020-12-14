import React, { Component } from "react";
class BusinessSearched extends Component {
  render() {
    const businessResult = this.props.businessResult;

    return (
      <div>
        <h1>Business Info </h1>
        <p>{businessResult.businessName} </p>
        <p> {businessResult.account.username} </p>
        <p> {businessResult.category} </p>
        <p> {businessResult.website} </p>
        <p> {businessResult.account.username} </p>
        <p> {businessResult.account.username} </p>
        <p> {businessResult.account.username} </p>
        <p> {businessResult.account.username} </p>
        <p> {} </p>
      </div>
    );
  }
}

export default BusinessSearched;
