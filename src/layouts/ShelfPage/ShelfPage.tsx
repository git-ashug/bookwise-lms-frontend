import { useState } from "react";
import { HistoryPage } from "./components/HistoryPage";
import { Loans } from "./components/Loans";

export const ShelfPage = () => {
  //This state is to re-trigger the useEffect of HistoryPage.
  //Initially, when Loans tab is opened by default, this state will be false(initial value),
  //when we will click on Your History tab then < HistoryPage /> will be rendered causing useEffect to call
  const [historyTabClick, setHistoryTabClick] = useState(false);

  return (
    <div className="container">
      <div className="mt-3">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-loans-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-loans"
              type="button"
              role="tab"
              aria-controls="nav-loans"
              aria-selected="true"
              onClick={() => {
                setHistoryTabClick(false);
              }}
            >
              Loans
            </button>
            <button
              className="nav-link"
              id="nav-history-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-history"
              type="button"
              role="tab"
              aria-controls="nav-history"
              aria-selected="false"
              onClick={() => {
                setHistoryTabClick(true);
              }}
            >
              Your History
            </button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-loans"
            role="tabpanel"
            aria-labelledby="nav-loans-tab"
          >
            <Loans />
          </div>
          <div
            className="tab-pane fade"
            id="nav-history"
            role="tabpanel"
            aria-labelledby="nav-history-tab"
          >
            {historyTabClick ? <HistoryPage /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};
