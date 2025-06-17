import './App.css';
import { useState } from 'react';

function App() {
  const [userMood, setUserMood] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const para = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. "
  const handleSend = () => {
    // For now, hardcode a simple reply
    setBotResponse(`I'm glad you shared that you're feeling "${userMood}". I'm here for you ❤️${para}`);
    setUserMood('');
  };
  
  return (
    <div className="Home">
      <div className="title">
        <h1>MoodBot 😊</h1>
        <p>Welcome! Tell me how you're feeling today.</p>
      </div>

      <div className='ChatContainer'>
        {botResponse && (
          <div className='bot-response'>
            <p>{botResponse}</p>
          </div>
        )}
      </div>
      <div className='input-container'>
        <input
        name='moodInput'
        id='moodInput'
        type='text'
        placeholder='How are you feeling today...'
        className='input'
        value={userMood}
        onChange={(e)=> setUserMood(e.target.value)}
        onKeyDown={(e) => {
          if(e.key ==='Enter'){
            handleSend();
          }
        }}
        />

        <button onClick={handleSend} className='send-button'>Send</button>
      </div>
    </div>
  );
}

export default App;