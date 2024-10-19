import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import { useOktaAuth } from "@okta/okta-react";

export const ChangeQuantityOfBook: React.FC<{
  book: BookModel;
  key: number;
  deleteBook: any;
}> = (props) => {
  const { authState } = useOktaAuth();

  const [quantity, setQuantity] = useState<number>(0);
  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    const fetchBookInState = () => {
      props.book.copies ? setQuantity(props.book.copies) : setQuantity(0);
      props.book.copiesAvailable
        ? setRemaining(props.book.copiesAvailable)
        : setRemaining(0);
    };
    fetchBookInState();
  }, []);

  async function increaseQuantity() {
    const url = `${process.env.REACT_APP_API}/books/secure/increase/quantity?bookId=${props.book.id}`;
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const increaseQuantityResponse = await fetch(url, requestOptions);
    if (!increaseQuantityResponse.ok) {
      throw new Error("Something went wrong");
    }

    //Here we assume that if resposne is ok, means backend has updated the info correctly
    // and just updating it on GUI as we don't want to fetch all the book info again.
    setQuantity(quantity + 1);
    setRemaining(remaining + 1);
  }

  async function decreaseQuantity() {
    const url = `${process.env.REACT_APP_API}/books/secure/decrease/quantity?bookId=${props.book.id}`;
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const decreaseQuantityResponse = await fetch(url, requestOptions);
    if (!decreaseQuantityResponse.ok) {
      throw new Error("Something went wrong");
    }

    //Here we assume that if resposne is ok, means backend has updated the info correctly
    // and just updating it on GUI as we don't want to fetch all the book info again.
    setQuantity(quantity - 1);
    setRemaining(remaining - 1);
  }

  async function deleteBook() {
    const url = `${process.env.REACT_APP_API}/books/secure/delete?bookId=${props.book.id}`;
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const deleteBookResponse = await fetch(url, requestOptions);
    if (!deleteBookResponse.ok) {
      throw new Error("Something went wrong");
    }

    props.deleteBook();
  }

  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          {/*Desktop version */}
          <div className="d-none d-lg-block">
            {props.book.img ? (
              <img src={props.book.img} width="123" height="196" alt="Book" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/new-book-1.png")}
                width="123"
                height="196"
                alt="Book"
              />
            )}
          </div>
          {/*Mobile version */}
          <div className="d-lg-none d-flex justify-content-center align-items-center ">
            {props.book.img ? (
              <img src={props.book.img} width="123" height="196" alt="Book" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/new-book-1.png")}
                width="123"
                height="196"
                alt="Book"
              />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.book.author}</h5>
            <h4>{props.book.title}</h4>
            <p className="card-text">{props.book.description}</p>
          </div>
        </div>
        <div className="mt-3 col-md-4 ">
          <div className="d-flex justify-content-center align-items-center">
            <p>
              Total Quantity: <b>{quantity}</b>
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p>
              Books Remaining: <b>{remaining}</b>
            </p>
          </div>
        </div>
        <div className="mt-3 col-md-1">
          <div className="d-flex justify-content-center">
            <button className="m-1 btn btn-md btn-danger" onClick={deleteBook}>
              Delete
            </button>
          </div>
        </div>
        <button
          className="m-1 btn btn-md btn-primary main-color text-white"
          onClick={increaseQuantity}
        >
          Add Quantity
        </button>
        {quantity > 1 && (
          <button
            className="m-1 btn btn-md btn-warning"
            onClick={decreaseQuantity}
          >
            Decrease Quantity
          </button>
        )}
      </div>
    </div>
  );
};
