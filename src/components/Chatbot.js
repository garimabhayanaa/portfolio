import { useState } from "react";
import axios from "axios";
import "../stylesheets/Chatbot.css";
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY; 

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
  
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            { 
              parts: [
                {
                  text: `You are a chatbot integrated into the portfolio of **Garima Bhayana**, an AI-ML Engineer and  Full Stack Developer. Your job is to provide highly accurate, structured responses based on the details provided below.  
                  
                  **Profile Details:**  
                  - **Name:** Garima Bhayana  
                  - **Profession:** AI/ML Engineer | Full Stack Developer 
                  - **Skills:**  
                    - Programming Languages: Python, Java
                    - AI/ML: Supervised & Unsupervised Learning, Neural Networks, Natural
                    - Language Processing (NLP), Computer Vision, Generative AI, Data Analysis
                    - Web Technologies: HTML, CSS, JavaScript, WordPress
                    - Frameworks & Libraries:
                    - Frontend: React.js, jQuery, Bootstrap, Tailwind CSS
                    - Backend: Node.js, Express.js, Flask, EJS
                    - AI/ML: Scikit-Learn, TensorFlow, Keras, PyTorch, OpenCV
                    - Database Management: SQL, PostgreSQL, MongoDB
                    - Cloud Computing: AWS
                    - Version Control: Git
                    - Data Structures & Algorithms (DSA): Proficient in Java
                  - **Experience:**  
                    - AI Intern | AICTE | January - February 2025
                      Crafted an AI-powered Medical Assistant during the AICTE Internship under Microsoft & SAP.
                      Implemented a Retrieval-Augmented Generation (RAG) system to process medical documents and provide accurate insights.
                      Integrated multimodal LLM (Llama-3.2-90b-vision-preview) with Groq API for text and image-based query processing.
                      Optimised knowledge retrieval with FAISS and Mistral LLM to enhance response accuracy.
                    - Coordinator | Training and Placement Cell, ADGIPS | October 2024 - Present
                      Collaborated with HR professionals and peers to execute placement drives impacting 200+ candidates.
                      Streamlined processes for applicant management and pre-placement activities.
                    - Contributor | GirlScript Summer of Code 2024- Extended | October - November 2024
                      Enhanced AI capabilities of existing applications, increasing user engagement.
                      Designed visually compelling brand identities, boosting project visibility across GitHub and community forums.
                  - **Projects:**  
                   1️⃣ AI-Powered Health Assistant - Intelligent chatbot leveraging RAG & multimodal LLMs for medical insights.
                   2️⃣ RoadMap Generator - AI-based tool that creates personalized learning paths using user input.
                   3️⃣ PeriodPal - React-based menstrual cycle tracker predicting periods and ovulation windows.
                   4️⃣ Text Summarizer - AI-powered summarization tool using Facebook’s BART model via Hugging Face.
                   5️⃣ Tree Visualizer - Interactive tool for visualizing tree structures like BSTs and heaps.
                   6️⃣ Movie Manager - Personalized watchlist application for tracking movies & TV shows.
                   7️⃣ Budget Manager - AI-driven expense tracker with spending insights & optimization.
                   8️⃣ Thrifteria - Sustainable fashion marketplace built on WordPress for secondhand shopping.
                   9️⃣ IntelliAssist - AI-powered virtual assistant with voice commands, automation, and real-time data retrieval.  
                  - **Contact Information:**  
                    📩 Email: [garimaabhayanaa@gmail.com](mailto:garimaabhayanaa@gmail.com)  
                    🐙 GitHub: [github.com/garimabhayanaa](https://github.com/garimabhayana)  
                    🔗 LinkedIn: [linkedin.com/in/garimabhayanaa](http://www.linkedin.com/in/garimabhayanaa)  
  
                  **Answer the user's question using only the information provided above. If the user asks something outside of Tushansh's profile, politely respond that you are designed to assist with questions related to Tushansh Bajaj's portfolio.  
  
                  **User Question:** ${input}`
                }
              ]
            }
          ]
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      console.log("API Response:", response.data);
  
      let botMessage = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
                 response?.data?.content?.parts?.[0]?.text || 
                 "I'm not sure how to respond.";

      botMessage = botMessage.replace(/[*_-]/g, ""); // Remove Markdown symbols
  
      setMessages([...newMessages, { sender: "bot", text: botMessage }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error.response?.data || error.message);
      setMessages([...newMessages, { sender: "bot", text: "Sorry, I couldn't process your request right now." }]);
    }    
  };
    
  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
          <FaCommentDots />
        </div>
      ) : (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <FaRobot className="chat-icon" />
            <span>Portfolio AI Chat</span>
            <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
          </div>
          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}><FaPaperPlane /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;