const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-100 via-red-100 to-pink-100 flex items-center justify-center px-6 py-10">
      
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-10">
        
        <h1 className="text-4xl font-extrabold text-center bg-linear-to-r from-orange-500 to-red-500 text-transparent bg-clip-text mb-6">
          Contact Us
        </h1>

        <p className="text-gray-600 text-lg text-center mb-10">
          We'd love to hear from you! Whether you have a question, feedback,
          or need support, feel free to reach out anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="bg-linear-to-r from-orange-400 to-red-400 text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">📍 Get in Touch</h2>
            <p className="mb-2">📧 Email: sangitaroy4829@gmail.com</p>
            <p className="mb-2">📞 Phone: +91 62030 57193</p>
            <p>📌 Location: India</p>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-6 rounded-2xl shadow-inner flex flex-col gap-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="bg-linear-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
            >
              Send Message 🚀
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;