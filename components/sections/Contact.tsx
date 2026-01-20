'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
} from 'react-icons/fa'

type FormState = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!form.name || !form.email || !form.message) {
    Swal.fire({
      icon: 'error',
      title: 'Oops 😢',
      text: 'Please fill in all required fields',
      confirmButtonColor: '#22d3ee',
      background: '#020617',
      color: '#ffffff',
    })
    return
  }

  setLoading(true)

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent 🚀',
        text: 'Your message has been sent successfully',
        confirmButtonColor: '#22d3ee',
        background: '#020617',
        color: '#ffffff',
      })

      setForm({ name: '', email: '', message: '' })
    } else {
      throw new Error()
    }
  } catch {
    Swal.fire({
      icon: 'error',
      title: 'Failed 😢',
      text: 'Email could not be sent',
    })
  } finally {
    setLoading(false)
  }
}



  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-slate-950 text-white px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi?  
            I&apos;m always open to discussing new ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactInfo
              icon={<FaEnvelope />}
              title="Email"
              value="dhruvinjariwala422002@gmail.com"
            />
            <ContactInfo
              icon={<FaPhoneAlt />}
              title="Phone"
              value="+91 8160335155"
            />
            <ContactInfo
              icon={<FaMapMarkerAlt />}
              title="Location"
              value="Surat,Gujarat,395002"
            />
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="
              bg-slate-900/80 backdrop-blur
              border border-white/10
              rounded-2xl p-8 space-y-6
              shadow-xl
            "
          >
            <Input
              icon={<FaUser />}
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              icon={<FaEnvelope />}
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <Textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            />

            {/* {error && <p className="text-red-400 text-sm">{error}</p>} */}
            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-sm"
              >
                Message ready to send 🚀
              </motion.p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full flex items-center justify-center gap-2
                py-3 rounded-lg font-semibold
                bg-cyan-500 text-black
                hover:bg-cyan-600 transition
                disabled:opacity-60
              "
            >
              {loading ? 'Sending...' : 'Send Message'}
              <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>

      {/* GLOW */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px] -translate-x-1/2 -translate-y-1/2" />
    </section>
  )
}

/* INPUT */
function Input({
  icon,
  ...props
}: {
  icon: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        {...props}
        className="
          w-full pl-12 pr-4 py-3 rounded-lg
          bg-slate-800 text-white
          outline-none focus:ring-2 focus:ring-cyan-400
        "
      />
    </div>
  )
}

/* TEXTAREA */
function Textarea({
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={5}
      className="
        w-full p-4 rounded-lg
        bg-slate-800 text-white
        outline-none focus:ring-2 focus:ring-cyan-400
      "
    />
  )
}

/* INFO ITEM */
function ContactInfo({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-cyan-400 text-2xl">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-400 text-sm">{value}</p>
      </div>
    </div>
  )
}
