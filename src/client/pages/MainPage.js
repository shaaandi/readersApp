import React from "react";
import { fetchHeadlines, fetchEditorsPick } from "../queries/mainPage/index";
import { useQuery } from "@apollo/react-hooks";
import Section1 from "../components/mainPage/section1";

function MainPage({ user }) {
  let {
    data: headlines,
    loading: fetchHeadlinesLoading,
    error: fetchHeadlinesError
  } = useQuery(fetchHeadlines);
  let {
    data: editorsPick,
    loading: fetchEditorsPickLoading,
    error: fetchEditorsPickError
  } = useQuery(fetchEditorsPick);

  if (fetchHeadlinesLoading || fetchEditorsPickLoading)
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );

  if (fetchHeadlinesError || fetchEditorsPickError) {
    return <div>Something went wrong .</div>;
  }

  let { fetchMainTemplete } = headlines;
  return (
    <div className="container-fluid">
      <Section1
        headlines={fetchMainTemplete}
        editorsPick={editorsPick.fetchMainTemplete.editorsPick}
        user={user}
      />
    </div>
  );
}

export default MainPage;
