import { Suspense, lazy, useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
const SimpleButton = lazy(() => import("./components/SimpleButton"));
import StateManagement from "./components/StateManagement";
import FormController from "./components/FormController";
import ConditionalRendering from "./components/ConditionalRendering";
import Navigation from "./components/Navigation";
import HigherOD from "./components/hoc/HigherOD";
import LifeCycleMethod from "./components/LifeCycleMethod";
import StateLiftUp from "./components/StateLiftUp";
import ReduxIntegration from "./components/ReduxIntegration";
import AdvancedUi from "./components/AdvancedUi";
import ErrorBoundary from "./components/ErrorBoundary";
import Errorr from "./components/Errorr";
import Login from './components/Login'
import { Private } from "./services/ProtectedRoute";
import Register from "./components/Register";
import Logout from "./components/Logout";
// import ProtectedRoute from './services/ProtectedRoute'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route
          path="/simple-button"
          element={
           <Private>
              <Suspense fallback={<div>loading...</div>}>
                <SimpleButton />
              </Suspense>
           </Private>
          }
        />
        <Route
          path="/state-management"
          element={
            <Private>
              <Suspense fallback={<div>loading...</div>}>
                <StateManagement />
              </Suspense>
            </Private>
          }
        />
        <Route
          path="/form-controller"
          element={
            <Private>
              <Suspense fallback={<div>loading...</div>}>
                <FormController />
              </Suspense>
            </Private>
          }
        />
        <Route
          path="/conditional-rendering"
          element={
            <Private>
              <Suspense fallback={<div>loading...</div>}>
                <ConditionalRendering />
              </Suspense>
            </Private>
          }
        />
        <Route
          path="/higher-OD"
          element={
            <Private>
              <Suspense fallback={<div>loading...</div>}>
                <HigherOD />
              </Suspense>
            </Private>
          }
        />
        <Route
          path="/life-cycle"
          element={
            <Private>
              <Suspense fallback={<div>loading...</div>}>
                <LifeCycleMethod />
              </Suspense>
            </Private>
          }
        />
        <Route
          path="/state-lift-up"
          element={
            <Private>
              <Suspense fallback={<div>loading...</div>}>
                <StateLiftUp />
              </Suspense>
            </Private>
          }
        />
        <Route
          path="/redux-integration"
          element={
            <Private>
              <Suspense fallback={<div>loading...</div>}>
                <ReduxIntegration />
              </Suspense>
            </Private>
          }
        />
        <Route
          path="/advanced-ui"
          element={
            <Private>
              <Suspense fallback={<div>loading...</div>}>
                <AdvancedUi />
              </Suspense>
            </Private>
          }
        />
        <Route
          path="/error"
          element={
            <Private>
              <ErrorBoundary>
                <Errorr />
              </ErrorBoundary>
            </Private>
          }
        />
        <Route
          path="/logout"
          element={

                <Logout />
          }
        />
      </Routes>
    </>
  );
}

export default App;
