import React from "react";

const Filters = ({
  filtersHandler,
  allBtnRef,
  completedBtnRef,
  uncompletedBtnRef,
}) => {
  return (
    <div className="filters">
      <button className="all" ref={allBtnRef} onClick={filtersHandler}>
        {" "}
        All{" "}
      </button>{" "}
      <button
        className="completed"
        ref={completedBtnRef}
        onClick={filtersHandler}
      >
        {" "}
        Completed{" "}
      </button>{" "}
      <button
        className="uncompleted"
        ref={uncompletedBtnRef}
        onClick={filtersHandler}
      >
        {" "}
        Uncompleted{" "}
      </button>{" "}
    </div>
  );
};

export default Filters;
