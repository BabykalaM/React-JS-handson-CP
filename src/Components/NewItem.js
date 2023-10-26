import React from "react";
import { connect } from "react-redux";

let NewsItem = ({ postData }) =>
  postData ? (
    <>
      <div>Form Data</div>
      <div>FirstName:{postData.firstName}</div>
      <div>LastName: {postData.lastName}</div>
    </>
  ) : null;
const mapStateToProps = (state) => ({
  postData: state.post.data,
});
NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
