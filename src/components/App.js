import React, { useState } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import MovieForm from './MovieForm';

const title = 'React Movie Cards';

const App = () => {

  const [reRenderCount,setReRenderCount] = useState(0);

  const onMovieFormSubmit = () => {
      setReRenderCount(reRenderCount + 1);
  };

  return (
    <div>
      <Header title={title} />
      <div style={{overflow: 'hidden'}}>
        <div className="mt-5" style={{float: 'left'}}>
          <Movies changeList={setReRenderCount} renderCnt={reRenderCount}/>
        </div>
        <div style={{float: 'left',marginLeft: 700,marginTop: 100}}>
           <MovieForm onSubmit={onMovieFormSubmit}/>
        </div>
      </div>
      <br/> <br/> <br/>
    </div>
  );
};

export default App;
