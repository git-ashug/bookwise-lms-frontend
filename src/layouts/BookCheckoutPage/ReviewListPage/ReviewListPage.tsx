import { useEffect, useState } from "react";
import ReviewModel from "../../../models/ReviewModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Review } from "../../Utils/Review";
import { Pagination } from "../../Utils/Pagination";

export const ReviewListPage = () => {
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [isLoadingReview, setIsLoadingReview] = useState(true);
  const [httpError, setHttpError] = useState(null);

  /*For pagination: */
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);
  const [totalAmountOfReviews, setTotalAmountOfReviews] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const bookId = window.location.pathname.split("/")[2];

  //copied from BookCheckoutPage and modified for reviews
  useEffect(() => {
    const fetchBookReviews = async () => {
      const reviewUrl: string = `${
        process.env.REACT_APP_API
      }/reviews/search/findByBookId?bookId=${bookId}&page=${
        currentPage - 1
      }&size=${reviewsPerPage}`;

      const responseReviews = await fetch(reviewUrl);

      if (!responseReviews.ok) {
        throw new Error("Something went wrong");
      }

      const responseJsonReviews = await responseReviews.json();

      const responseData = responseJsonReviews._embedded.reviews;
      setTotalAmountOfReviews(responseJsonReviews.page.totalElements);
      setTotalPages(responseJsonReviews.page.totalPages);

      const loadedReviews: ReviewModel[] = [];

      for (const review of responseData) {
        loadedReviews.push({
          id: review.id,
          userEmail: review.userEmail,
          date: review.date,
          rating: review.rating,
          bookId: review.bookId,
          reviewDescription: review.reviewDescription,
        });
      }

      setReviews(loadedReviews);
      setIsLoadingReview(false);
    };

    fetchBookReviews().catch((error: any) => {
      setIsLoadingReview(false);
      setHttpError(error.message);
    });
  }, [currentPage]);

  if (isLoadingReview) {
    return <SpinnerLoading />;
  }

  if (httpError != null) {
    <div className="container mt-5">
      <p>{httpError}</p>
    </div>;
  }

  const indexOfLastReview: number = currentPage * reviewsPerPage;
  const indexOfFirstReview: number = indexOfLastReview - reviewsPerPage;
  let lastItem =
    currentPage * reviewsPerPage <= totalAmountOfReviews
      ? currentPage * reviewsPerPage
      : totalAmountOfReviews;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <div>
        <h3>Comments: {reviews.length}</h3>
      </div>
      <p>
        {indexOfFirstReview + 1} to {lastItem} of {totalAmountOfReviews} items:
      </p>
      <div className="row">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>

      {/* Render Pagination component only when totalPages > 1 */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      )}
    </div>
  );
};
