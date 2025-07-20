// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-blue-200 text-black py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} HelpHub. All rights reserved.</p>

        <div className="mt-4 md:mt-0">
          <a href="#about" className="text-sm mx-2 hover:underline">About</a>
          <a href="#features" className="text-sm mx-2 hover:underline">Features</a>
          <a href="#contact" className="text-sm mx-2 hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
