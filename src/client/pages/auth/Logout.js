import React, { useEffect, useState } from "react";

import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { logout } from "../../mutations/auth";
import { fetchCurrentUser } from "../../queries/auth";

function Logout({ history }) {
  let [onMount] = useState(0);

  let [
    mutateLogout,
    {
      data: logoutMutationResponse,
      loading: logoutMutationLoading,
      error: logoutMutationError
    }
  ] = useMutation(logout);

  useEffect(() => {
    mutateLogout({
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: fetchCurrentUser
        }
      ]
    });
  }, [onMount]);

  if (logoutMutationResponse) {
    history.push("/");
  }

  if (logoutMutationLoading) {
    return (
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    );
  }

  return (
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  );
}

export default withRouter(Logout);
