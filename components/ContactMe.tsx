import NextImage from 'next/image';
import NextLink from 'next/link';
import { Loading } from '../components';
import React, { useState, FormEvent, useRef, ChangeEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

type FormState = {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  subject: string;
  message: string;
};

type ServiceMessage = {
  class: string;
  text: string;
};

function ContactMe() {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const recaptchaRef = useRef<any>();
  const initialFormState = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formState, setFormeState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setReCaptchaToken] = useState<string>();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await postSubmit();
    setSubmitting(false);
  };

  const postSubmit = async () => {
    const payload = {
      ...formState,
      'g-recaptcha-response': recaptchaToken
    };
    console.log(payload);

    try {
      const result = await fetch('/api/sendgrid', {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      // console.log(result);
      setMessage({
        class: 'bg-green-500',
        text: 'Thanks for contacting me, I will be in touch with you shortly.'
      });
      setFormeState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      // console.log(error);
      setMessage({
        class: 'bg-red-500',
        text: 'Sorry, there was a problem with your form submission. Please try again'
      });
    }
  };

  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const key = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormeState(updatedFormState);
  };
  const updateRecaptchaToken = (token: string | null) => {
    setReCaptchaToken(token as string);
  };
  return (
    <div className="bg-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-7xl mx-auto">
          <div className="container mx-auto mb-8">
            <div className="w-full inline-block py-10 lg:py-20">
              <div className="md:float-left block">
                <span className="text-5xl lg:text-8xl font-semibold leading-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500 ">
                  Contact
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-cyan-600 to-purple-600 sm:py-32 lg:max-w-screen-2xl lg:mx-auto lg:rounded-2xl lg:mt-6 lg:mb-12">
            <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-50 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                Say Hello 👋🏽
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-50 text-center">
                Feel free to reach out for any freelance projects or job
                inquiries. Or if you would like to have a coffee chat feel free
                to reach out via the Twitter link below.
              </p>
            </div>
          </div>
        </div>

        {/* Container with form and picture */}
        <div className="container my-8 max-w-screen-2xl mx-auto 2xl:px-0">
          <div
            aria-hidden="true"
            className="relative w-full h-[300px] lg:h-[600px]  mx-auto mb-8 lg:mb-10"
          >
            <NextImage
              src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1635409171/Personal-Website/alvin-engler-bIhpiQA009k-unsplash_q5ylhi.jpg"
              alt=""
              // width="100%"
              // height="100%"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 " />
          </div>
          <div className=" relative rounded-2xl shadow-2xl bg-white py-16 sm:py-24 sm:px-6 lg:px-8 lg:py-32 lg:rounded-b-2xl lg:row-start-1 lg:col-start-1 lg:col-span-2">
            <section className="relative" aria-labelledby="contact-heading">
              <div className="absolute w-full h-1/2" aria-hidden="true" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                  <h2 id="contact-heading" className="sr-only">
                    Contact me
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Contact information */}
                    <div className="relative rounded-3xl overflow-hidden py-10 px-6 bg-gradient-to-b from-indigo-500 to-indigo-600 sm:px-10 xl:p-12">
                      {/* Decorative angle backgrounds */}
                      <div
                        className="absolute inset-0 pointer-events-none sm:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={343}
                          height={388}
                          viewBox="0 0 343 388"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                            fill="url(#linear1)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear1"
                              x1="254.553"
                              y1="107.554"
                              x2="961.66"
                              y2="814.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={359}
                          height={339}
                          viewBox="0 0 359 339"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                            fill="url(#linear2)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear2"
                              x1="192.553"
                              y1="28.553"
                              x2="899.66"
                              y2="735.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={160}
                          height={678}
                          viewBox="0 0 160 678"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                            fill="url(#linear3)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear3"
                              x1="192.553"
                              y1="325.553"
                              x2="899.66"
                              y2="1032.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-50">
                        Let's Work Together.
                      </h3>
                      <div className="mt-6 text-lg text-indigo-50 max-w-3xl">
                        <p>
                          I would love to hear from you. Email hello [at]
                          ivanguzman.dev or use the form to reach out. Tell me
                          how I can help you and I will get in touch shortly.
                        </p>
                        <div className="mt-3"></div>
                      </div>
                      <ul role="list" className="mt-8 flex space-x-12">
                        <li>
                          <a
                            className="text-indigo-200 hover:text-indigo-100"
                            href="https://www.linkedin.com/in/ivan-julian-guzman/"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedinIn className="w-6 h-6" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-indigo-200 hover:text-indigo-100"
                            href="https://github.com/ivngzmn"
                          >
                            <span className="sr-only">GitHub</span>
                            <FaGithub className="w-6 h-6" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-indigo-200 hover:text-indigo-100"
                            href="https://twitter.com/zaku_dev"
                          >
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="w-6 h-6" />
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Contact form */}
                    <div className="py-10 sm:px-10 lg:col-span-2 xl:p-12">
                      <h3 className="text-xl font-medium text-gray-900">
                        Send me a message
                      </h3>
                      <form
                        action="#"
                        method="POST"
                        onSubmit={submitForm}
                        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div>
                          <label
                            htmlFor="firstname"
                            className="block text-sm font-medium text-gray-900"
                          >
                            First name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              required={true}
                              name="firstname"
                              id="firstname"
                              autoComplete="given-name"
                              placeholder="Jordan"
                              value={formState?.firstname}
                              onChange={updateFormControl}
                              className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="lastname"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Last name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              required={true}
                              name="lastname"
                              id="lastname"
                              autoComplete="family-name"
                              placeholder="Walke"
                              value={formState?.lastname}
                              onChange={updateFormControl}
                              className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required={true}
                              autoComplete="email"
                              placeholder="e.g. hello@jordanwalke.com"
                              value={formState?.email}
                              onChange={updateFormControl}
                              className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Phone
                            </label>
                            <span
                              id="phone-optional"
                              className="text-sm text-gray-500"
                            >
                              Optional
                            </span>
                          </div>
                          <div className="mt-1">
                            <input
                              type="text"
                              required={false}
                              name="phone"
                              id="phone"
                              autoComplete="tel"
                              placeholder="555-857-5309"
                              value={formState?.phone}
                              onChange={updateFormControl}
                              className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                              aria-describedby="phone-optional"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Subject
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              required={true}
                              name="subject"
                              id="subject"
                              placeholder="Looking forward to working with you."
                              value={formState?.subject}
                              onChange={updateFormControl}
                              className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex justify-between">
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Message
                            </label>
                            <span
                              id="message-max"
                              className="text-sm text-gray-500"
                            >
                              Max. 500 characters
                            </span>
                          </div>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              required={true}
                              name="message"
                              placeholder="Let's meet for a coffee and discuss my project!"
                              value={formState?.message}
                              onChange={updateFormControl}
                              rows={4}
                              className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                              aria-describedby="message-max"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                          {message && (
                            <div
                              className={`flex flex-col text-white w-full sm:w-auto sm: p-4 sm:mr-6 ${message.class}`}
                            >
                              {message.text}
                            </div>
                          )}
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey={recaptchaKey}
                            onChange={updateRecaptchaToken}
                          />
                          <button
                            disabled={submitting}
                            type="submit"
                            className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                          >
                            {submitting ? <Loading /> : 'Submit'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* call to action for twitter */}
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-cyan-600 to-purple-600 lg:max-w-7xl lg:mx-auto lg:my-12 px-10 my-8 rounded-2xl shadow-2xl">
            <div className="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                <span className="block text-indigo-50">
                  Reach out via Twitter
                </span>
                <span className="block text-indigo-50">DM's are open.</span>
              </h2>
              <NextLink href="https://twitter.com/zaku_dev">
                <a className="mt-8 w-full inline-flex items-center justify-center py-3 px-6 bg-indigo-50 border border-transparent rounded-md shadow-md text-base font-medium text-indigo-600 hover:bg-indigo-700 hover:text-white sm:w-auto">
                  <span>Come say hi.</span>
                  <FaTwitter
                    className="ml-3 h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
