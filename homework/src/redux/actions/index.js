export const ADD_TO_FAVORITES = `ADD_TO_FAVORITES`;
export const DELETE_FAVORITE = `DELETE_FAVORITE`;
export const FETCH_JOBS = `FETCH_JOBS`;
export const FETCH_JOBS_LOADING = `FETCH_JOBS_LOADING`;
export const TRIGGER_FETCH = `TRIGGER_FETCH`;
export const FETCH_ERROR = `FETCH_ERROR`;

export const addToFavoritesAction = (job) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: job,
  };
};

export const deleteFavoriteAction = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};

export const fetchJobsAction = (jobs) => {
  return {
    type: FETCH_JOBS,
    payload: jobs,
  };
};

// FOR UX - the user will see the spinner until the books are rendered
// action creator for setting the 'isLoading' property in the 'jobsResultReducer' reducer to "false"
export const fetchJobsLoadingAction = (bool) => {
  return {
    type: FETCH_JOBS_LOADING,
    payload: bool,
  };
};

export const triggeredFetchAction = () => {
  return {
    type: TRIGGER_FETCH,
  };
};

export const fetchErrorAction = (bool) => {
  return {
    type: FETCH_ERROR,
    payload: bool,
  };
};

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs...");
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const fetchedJobs = data.data;
        // dispatch({
        //   type: GET_JOBS,
        //   payload: fetchedJobs,
        // });
        dispatch(fetchErrorAction(false));
        dispatch(fetchJobsAction(fetchedJobs));

        dispatch(triggeredFetchAction());

        // AFTER we dispatch the GET_JOBS action, we create a
        // setTimeout function that will END showing the spinner 100ms
        // before the books are rendered
        setTimeout(() => {
          dispatch(fetchJobsLoadingAction(false));
        }, 100);
      } else {
        alert("Error fetching results");

        dispatch(triggeredFetchAction());
        dispatch(fetchJobsLoadingAction(false));

        dispatch(fetchErrorAction(true));
      }
    } catch (error) {
      console.log(error);

      dispatch(triggeredFetchAction());
      dispatch(fetchJobsLoadingAction(false));

      dispatch(fetchErrorAction(true));
    }
  };
};
