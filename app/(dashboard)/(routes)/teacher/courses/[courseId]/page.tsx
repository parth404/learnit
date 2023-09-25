import React from "react";

type Props = {};

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  return <div>CourseIdPage for the Id: {params.courseId}</div>;
};

export default CourseIdPage;
