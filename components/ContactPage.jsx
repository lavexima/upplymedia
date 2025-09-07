"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName:"", lastName:"", email:"", message:"" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if(data.success){
        alert("Mesajınız gönderildi!");
        setFormData({ firstName:"", lastName:"", email:"", message:"" });
      } else {
        console.error(data.error);
        alert("Mesaj gönderilemedi, tekrar deneyin.");
      }
    } catch(err) {
      console.error(err);
      alert("Mesaj gönderilemedi, tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Bize Ulaşın</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="firstName" placeholder="Adınız" value={formData.firstName} onChange={handleChange} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" required />
          <input type="text" name="lastName" placeholder="Soyadınız" value={formData.lastName} onChange={handleChange} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" required />
          <input type="email" name="email" placeholder="E-posta" value={formData.email} onChange={handleChange} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" required />
          <textarea name="message" placeholder="Mesajınız" value={formData.message} onChange={handleChange} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 h-32 resize-none" required />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full">Gönder</button>
        </form>
      </div>
    </div>
  );
}
