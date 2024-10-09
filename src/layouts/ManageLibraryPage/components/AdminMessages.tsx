import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import MessageModel from "../../../models/MessageModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Pagination } from "../../Utils/Pagination";
import { AdminMessage } from "./AdminMessage";

export const AdminMessages = () => {
  const { authState } = useOktaAuth();
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);
  const [httpError, setHttpError] = useState(null);

  //Messages state
  const [messages, setMessages] = useState<MessageModel[]>([]);

  //Pagination
  const [messagesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMessages = async () => {
      if (authState && authState.isAuthenticated) {
        const url = `http://localhost:8080/api/messages/search/findByClosed?closed=false&page=${
          currentPage - 1
        }&size=${messagesPerPage}`;
        const messagesResponse = await fetch(url);
        if (!messagesResponse.ok) {
          throw new Error("Something went wrong!");
        }
        const messagesResponseJson = await messagesResponse.json();
        setMessages(messagesResponseJson._embedded.messages);
        setTotalPages(messagesResponseJson.page.totalPages);
      }
      setIsLoadingMessages(false);
    };
    fetchMessages().catch((error: any) => {
      setIsLoadingMessages(false);
      setHttpError(error.message);
    });
    window.scrollTo(0, 0);
  }, [authState, currentPage]);

  if (isLoadingMessages) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-2">
      {messages.length > 0 ? (
        <>
          <h5>Pending Q/A:</h5>
          {messages.map((message) => (
            <div key={message.id}>
              <AdminMessage message={message} />
            </div>
          ))}
        </>
      ) : (
        <h5>No pending Q/A</h5>
      )}

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
