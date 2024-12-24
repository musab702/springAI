import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';    
import ImageGenerator from './components/ImageGenerator';
import Chat from './components/chat';
import RecipieGenerator from './components/RecipieGenerator';

function App() {
  const[activeTab, setActiveTab] = useState('image-generator');

  const handleTabChange = (tab) => {
    //alert(tab)
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <button className={activeTab == 'image-generator' ? 'active': ''}
      onClick={()=>handleTabChange('image-generator')}>
        Image Generator
      </button>
      <button className={activeTab == 'chat' ? 'active': ''}
      onClick={()=>handleTabChange('chat')}>
        Chat
      </button>
      <button className={activeTab == 'recipe-generator' ? 'active': ''}
      onClick={()=>handleTabChange('recipe-generator')}>
        Recipe generator
      </button>  

      <div>
        {activeTab == 'image-generator' && <ImageGenerator/>}
        {activeTab == 'chat' && <Chat/>}
        {activeTab == 'recipe-generator' && <RecipieGenerator/>}
      </div>


    </div>
  );
}

export default App;
