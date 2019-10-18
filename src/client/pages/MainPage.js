import React from "react";
import { fetchHeadlines, fetchEditorsPick } from "../queries/mainPage/index";
import { useQuery } from "@apollo/react-hooks";

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

  console.log({
    headlines,
    editorsPick
  });
  if (fetchHeadlinesLoading) return <div>Loading</div>;
  return <div>Fetched DATA Completed</div>;
}

export default MainPage;
