import React from "react";
import { fetchHeadlines, fetchEditorsPick } from "../queries/mainPage/index";
import { useQuery } from "@apollo/react-hooks";
import Section1 from "../components/mainPage/section1";

function MainPage() {
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
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    );
  return (
    <div className="container-fluid">
      <Section1
        headlines={headlines.fetchMainTemplete}
        editorsPick={editorsPick.fetchMainTemplete.editorsPick}
      />
    </div>
  );
}

export default MainPage;
