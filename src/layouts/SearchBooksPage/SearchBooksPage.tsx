import { useState, useEffect } from "react";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchBook } from "./components/SearchBook";

export const SearchBooksPage = () => {
  /*Copied from Carousel */
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:8080/api/books";
      const url: string = `${baseUrl}?page=0&size=5`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseJson = await response.json();
      const responseData = responseJson._embedded.books;

      const loadedBooks: BookModel[] = [];
      for (let key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError != null) {
    <div className="container mt-5">
      <p>{httpError}</p>
    </div>;
  }

  return (
    <div className="container">
      <div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Frontend
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Backend
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    DevOps
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h5>Number of results: (22)</h5>
        </div>
        <p>1 to 5 of 22 items:</p>
        {books.map((book) => (
          <SearchBook book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};
