#!/bin/sh
echo PORT=$PORT >>.env.production
echo REACT_APP_BASE_URL=$REACT_APP_BASE_URL >>.env.production
echo REACT_APP_REDUX_LOGGER=$REACT_APP_REDUX_LOGGER >>.env.production
echo REACT_APP_BASE_URL_API=$REACT_APP_BASE_URL_API >>.env.production
echo GOOGLE_API_KEY=$GOOGLE_API_KEY >>.env.production
