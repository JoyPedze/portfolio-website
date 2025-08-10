"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["joypedped@gmail.com"],
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Email error:", error)
      return {
        success: false,
        message: "Sorry, there was an error sending your message. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}
