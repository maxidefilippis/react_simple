import React from "react";
import "./index.scss";
import { BACK_LIMIT, NEXT_LIMIT } from "../../constants";
import { Button } from "../../components";

const PaginationControls = ({ controls, pagination }) => (
  <div className="paginationControls">
    <div className="paginationControls__buttons">
      <Button
        name="Back"
        onClick={controls["back"]}
        disabled={pagination === BACK_LIMIT}
      />
      <Button
        name="Next"
        onClick={controls["next"]}
        disabled={pagination === NEXT_LIMIT}
      />
    </div>
    <p>
      Page: {pagination} of {NEXT_LIMIT}
    </p>
  </div>
);

export default PaginationControls;
