import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <Quotes />
      <ContactForm />
    </div>
  );
}

export default App;

