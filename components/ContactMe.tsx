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
    <div className="overflow-hidden bg-zinc-900">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-[90rem]">
          <div className="mb-2 lg:mb-8">
            <div className="inline-block w-full py-10 lg:py-20">
              <div className="block md:float-left">
                <span
                  className="text-6xl font-semibold leading-8 tracking-tight lg:text-8xl"
                  id="contact"
                >
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="mx-auto max-w-[90rem] py-4 lg:py-9">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-purple-600 p-8 shadow-2xl sm:py-32 lg:mx-auto lg:mt-6 lg:mb-12 lg:max-w-screen-2xl lg:rounded-2xl">
            <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-50 sm:text-5xl sm:leading-none lg:text-6xl">
                Say Hello 👋🏽
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-50">
                Feel free to reach out for any freelance projects or job
                inquiries. Or if you would like to have a coffee chat feel free
                to reach out via the Twitter link below.
              </p>
            </div>
          </div>
          {/* image */}
          <section className="py-8">
            <div
              aria-hidden="true"
              className="relative mx-auto h-[300px] w-full max-w-[90rem] lg:h-[800px]"
            >
              <NextImage
                src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1635409171/Personal-Website/alvin-engler-bIhpiQA009k-unsplash_q5ylhi.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                loading="lazy"
              />
            </div>
          </section>
        </section>

        {/* Container with form and picture */}

        <div className="container mx-auto py-8 lg:max-w-[90rem]">
          <div className=" relative rounded-2xl bg-zinc-100 py-16 shadow-2xl sm:py-24 sm:px-6 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:rounded-b-2xl lg:px-8 lg:py-32">
            <section className="relative" aria-labelledby="contact-heading">
              <div className="absolute h-1/2 w-full" aria-hidden="true" />

              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative">
                  <h2 id="contact-heading" className="sr-only">
                    Contact me
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Contact information */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-500 to-indigo-600 py-10 px-6 sm:px-10 xl:p-12">
                      {/* Decorative angle backgrounds */}
                      <div
                        className="pointer-events-none absolute inset-0 sm:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full"
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
                        className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full"
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
                        className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full"
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
                      <h3 className="text-3xl font-extrabold tracking-tight text-indigo-50 sm:text-4xl">
                        Let's Work Together.
                      </h3>
                      <div className="mt-6 max-w-3xl text-lg text-indigo-50">
                        <p>
                          I would love to hear from you.{' '}
                          <NextLink
                            href={`mailto:hello@ivanguzman.dev?subject=Let's chat&body=Hello Ivan,%0D%0A%0D%0ALets chat!`}
                          >
                            <a className="underline">Email</a>
                          </NextLink>{' '}
                          or use the form to reach out. Tell me how I can help
                          you and I will get in touch shortly.
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
                            <FaLinkedinIn className="h-6 w-6" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-indigo-200 hover:text-indigo-100"
                            href="https://github.com/ivngzmn"
                          >
                            <span className="sr-only">GitHub</span>
                            <FaGithub className="h-6 w-6" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-indigo-200 hover:text-indigo-100"
                            href="https://twitter.com/zaku_dev"
                          >
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="h-6 w-6" />
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Contact form */}
                    <div className="py-10 sm:px-10 lg:col-span-2 xl:p-12">
                      <h3 className="text-2xl font-medium text-gray-900">
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
                            className="block text-lg font-medium text-gray-900"
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
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="lastname"
                            className="block text-lg font-medium text-gray-900"
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
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-900"
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
                              placeholder="hello@jordanwalke.com"
                              value={formState?.email}
                              onChange={updateFormControl}
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label
                              htmlFor="phone"
                              className="block text-lg font-medium text-gray-900"
                            >
                              Phone
                            </label>
                            <span
                              id="phone-optional"
                              className="text-lg text-gray-500"
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
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              aria-describedby="phone-optional"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="subject"
                            className="block text-lg font-medium text-gray-900"
                          >
                            Subject
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              required={true}
                              name="subject"
                              id="subject"
                              placeholder="I need to grow my business"
                              value={formState?.subject}
                              onChange={updateFormControl}
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex justify-between">
                            <label
                              htmlFor="message"
                              className="block text-lg font-medium text-gray-900"
                            >
                              Message
                            </label>
                            <span
                              id="message-max"
                              className="text-lg text-gray-500"
                            >
                              Max. 500 characters
                            </span>
                          </div>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              required={true}
                              name="message"
                              placeholder="Let's meet over a coffee and discuss my project!"
                              value={formState?.message}
                              onChange={updateFormControl}
                              rows={4}
                              className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              aria-describedby="message-max"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                          {message && (
                            <div
                              className={`sm: flex w-full flex-col p-4 text-white sm:mr-6 sm:w-auto ${message.class}`}
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
                            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
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
      </div>
      {/* call to action for twitter */}
      <section>
        <div className="mx-auto max-w-[90rem] px-4 py-20 pb-6 pt-1 lg:px-0">
          <div className="my-8 rounded-2xl bg-gradient-to-br from-cyan-600 to-purple-600 px-10 shadow-2xl lg:mx-auto lg:my-12">
            <div className="mx-auto max-w-md py-16 px-4 text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                <span className="block text-indigo-50">
                  Reach out via Twitter
                </span>
                <span className="block text-indigo-50">DM's are open.</span>
              </h2>
              <NextLink href="https://twitter.com/zaku_dev">
                <a className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 py-3 px-6 text-base font-medium text-indigo-600 shadow-md hover:bg-indigo-700 hover:text-white sm:w-auto">
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
      </section>
    </div>
  );
}

export default ContactMe;
