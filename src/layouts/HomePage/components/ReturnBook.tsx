import React from "react";
import BookModel from "../../../models/BookModel";
import { Link } from "react-router-dom";

export const ReturnBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <div className="text-center">
        {/*Ternary Operator: If img is present then show that, if no, rollback to static image */}
        {props.book.img ? (
          <img src={props.book.img} alt="book" height={"233"} width={"151"} />
        ) : (
          <img
            src={require("./../../../Images/BooksImages/new-book-1.png")}
            alt="book"
            height={"233"}
            width={"151"}
          />
        )}

        <h6 className="mt-2">{props.book.title}</h6>
        <p>{props.book.author}</p>
        <Link
          className="btn main-color text-white"
          to={`/checkout/${props.book.id}`}
        >
          Reserve
        </Link>
      </div>
    </div>
  );
};
