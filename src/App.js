import {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "./assets/theme"
import Container from "./components/core/Container";
const PostsPage=lazy(() => import("./pages/PostsPage"))
const SinglePostPage=lazy(() => import("./pages/SinglePostPage"))


function App() {

  return (
      <div >
            <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Suspense fallback={null}>
                <BrowserRouter>
                  <Routes>
                      <Route element={<Container/>}>
                          <Route index element={<PostsPage/>}/>
                          <Route path={"/:postId"} element={<SinglePostPage/>}/>
                          <Route
                              path="*"
                              element={<Navigate to="/" replace/>}
                          />
                      </Route>

                  </Routes>
                </BrowserRouter>
              </Suspense>
            </ThemeProvider>
      </div>
  );
}



export default App;