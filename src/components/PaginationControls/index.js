import React from "react";
import { BACK_LIMIT, NEXT_LIMIT } from "../../constants";
import { Button } from "../../components";

const PaginationControls = ({ controls, pagination }) => (
  <div>
    <Button
      name="Back"
      onClick={controls["back"]}
      disabled={pagination === BACK_LIMIT}
    />
    <p>
      Page: {pagination} of {NEXT_LIMIT}
    </p>
    <Button
      name="Next"
      onClick={controls["next"]}
      disabled={pagination === NEXT_LIMIT}
    />
  </div>
);

export default PaginationControls;
