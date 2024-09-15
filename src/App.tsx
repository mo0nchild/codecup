import React from 'react';
import ImageEditor from '@components/ImageEditor';

const App: React.FC = () => {
  return (
    <div style={AppStyle}>
        <ImageEditor />
    </div>
  );
}
const AppStyle : React.CSSProperties = { 
    textAlign: 'center',
};
export default App;