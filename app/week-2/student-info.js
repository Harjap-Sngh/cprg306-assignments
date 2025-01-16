import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <p>Harjap Singh</p>
      <Link className="underline" href="https://github.com/Harjap-Sngh">
        https://github.com/Harjap-Sngh
      </Link>
    </div>
  );
};

export default StudentInfo;
