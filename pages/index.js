import React from 'react';
import Navbar from 'components/Layouts/Navbar';
import Banner from 'components/Home/Banner';
import CustomChatbot from 'components/chatbot/CustomChatbot';

class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <CustomChatbot/>
      </>
    );
  }
}

export default Index;
