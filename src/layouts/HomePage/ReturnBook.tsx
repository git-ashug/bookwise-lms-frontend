import React from "react";

export const ReturnBook = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <div className="text-center">
        <img
          src={require("./../../Images/BooksImages/new-book-1.png")}
          alt="book"
          height={"233"}
          width={"151"}
        />
        <h6 className="mt-2">Book</h6>
        <p>Bookwise</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
