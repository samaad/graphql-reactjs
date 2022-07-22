import React from "react";
import RepoInfoRow from "./RepoInfoRow";

const RepoInfo = ({ nodes }) => {
  return (
    <ul className="list-group list-group-flush">
      {nodes?.map((item) => (
        <RepoInfoRow item={item} key={item.id.toString()} />
      ))}
    </ul>
  );
};

export default RepoInfo;
