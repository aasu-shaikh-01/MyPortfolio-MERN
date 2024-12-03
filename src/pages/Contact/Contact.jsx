import React, { useState } from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name == "") {
      toast.error("Please fill your name");
      return;
    }
    if (email == "") {
      toast.error("Please fill your email");

      return;
    }
    if (message == "") {
      toast.error("Please type your message");
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: "Md Absar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        // console.error("error sending email: ", error);
      });
    try {
      await axios
        .post("http://localhost:4000/api/v1/message/send", {
          name,
          email,
          message,
        })
        .then((res) => {
          toast.success(res.data.message);
          setEmail("");
          setMessage("");
          setName("");
        });
    } catch (error) {
      toast.error("Please fill full form");
      // console.log(error);
    }
  };

  return (
    <>
      <div
        className="flex justify-center mx-4 flex-col sm:flex-row gap-8 mt-12 sm:mr-16 p-8 shadow-2xl"
        id="Contact"
      >
        <div className="">
          <img src="email.png" alt="emaiPic" className="h-full rounded-lg" />
        </div>
        <div className="flex w-full flex-col items-center">
          <p className="flex items-center gap-4 text-2xl">
            Contact With
            <Link
              target="_blank"
              to={
                "https://www.linkedin.com/in/md-absar-3a3033217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
            >
              <SiLinkedin />
            </Link>
            <Link
              target="_blank"
              to={
                "https://www.facebook.com/profile.php?id=61557143755675&mibextid=ZbWKwL"
              }
            >
              <FaFacebook />
            </Link>
            <Link
              target="_blank"
              to={
                "https://www.instagram.com/aasu_shaikh_01/profilecard/?igsh=emdlMTlsZWJqZjE="
              }
            >
              <FaSquareInstagram />
            </Link>
            <Link
              target="_blank"
              to={"https://x.com/MdAbsar46217506?t=didCP6sdxHDcWPWARw0-uA&s=08"}
            >
              <BsTwitterX />
            </Link>
            <Link target="_blank" to={"https://github.com/aasu-shaikh-01"}>
              <FaGithub />
            </Link>
          </p>
          <div className="flex items-center w-full">
            <hr className="h-1 bg-black w-full" />
            <p>OR</p>
            <hr className="h-1 bg-black w-full" />
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full gap-4 p-4"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter you name"
                className="sm:w-96 w-80 p-2 border"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email address"
                className="p-2 border"
              />
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Write you message"
                className="p-2 border"
              ></textarea>
              <button
                type="submit"
                className="text-xl p-1 bg-green-500 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
