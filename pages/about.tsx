import { Button } from '@/components/Button';
import { ButtonType } from '../types/types';
import { Container } from 'layouts/Container';
import Image from 'next/image';
import siteMetadata from '@/data/siteMetadata';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

declare const ezstandalone: any;

export default function About() {
  const { push } = useRouter();
  const { t: translate } = useTranslation('about');

  useEffect(() => {
    if (window.ezstandalone !== undefined) {
      ezstandalone.define(117, 116);
      if (!ezstandalone.enabled) {
        ezstandalone.enable();
        ezstandalone.display();
      } else {
        ezstandalone.refresh();
      }
    }
  }, []);

  return (
    <Container title={translate('page title')}>
      <h1>
        <span className="block max-w-2xl mx-auto text-4xl font-bold leading-10 text-center sm:text-5xl">
          {translate('about title')}
        </span>
      </h1>
      <p className="-mt-4">{translate('first about greeting')}</p>
      <p>{translate('second about greeting')}</p>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
        <div className="col-span-1">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="fill"
            src={siteMetadata.avatarAbout}
            placeholder="blur"
            blurDataURL={siteMetadata.avatarAbout}
            width={420}
            height={460}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
        <div className="col-span-3">
          <p className="xl:mt-[1.6rem]">{translate('third about greeting')}</p>
          <p className="">{translate('fourth about greeting')}</p>
          <p>{translate('fifth about greeting')}</p>
        </div>

        <div id="ezoic-pub-ad-placeholder-116"> </div>
      </div>
      <hr className="my-5 w-full border-none text-center h-10 before:content-[''] before:text-[#D1D5DB] before:text-2xl"></hr>

      <div>
        <h2 className="m-0 text-gray-900 dark:text-white">
          {translate('education')}
        </h2>
        <p className="pt-4">{translate('education sentence')}</p>
        <div>
          <article className="relative grid md:grid-cols-5 md:gap-10 before:content-[''] mx-12 before:block before:h-full before:absolute before:left-[-25px] md:before:left-[-37px] before:border-l-2 before:border-gray-300 dark:before:border-gray-700 md:space-x-4 pb-0 md:pb-12">
            <div className="relative md:pb-0 pb-9 md:col-span-2">
              <div className="sticky top-28">
                <svg
                  className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 className="p-0 m-0 text-[1.4rem]">
                  {translate('first left table')}
                </h3>
                <a
                  rel="noreferrer"
                  target={'_blank'}
                  href="https://www.coderhouse.com/online/carrera-online-desarrollo-fullstack"
                  className="p-0 m-0"
                >
                  Coderhouse
                </a>
                <p className="p-0 m-0 text-sm text-gray-500">
                  09/2021 - 09/2022
                </p>
              </div>
            </div>
            <div className="relative  text-base pb-6 -mt-1 md:border-b md:border-gray-300 md:dark:border-gray-400 md:col-span-3">
              HTML, CSS, SASS, Bootstrap, Javascript, GIT, Github, ReactJS,
              Formik, Yup, NodeJS, ExpressJS, MySQL, Sequelize, MongoDB,
              Mongoose, JWT, OAuth 2.0, Passport, Twilio, Nodemailer,
              Websockets(Socket.io), PM2, Nginx, AWS, Heroku, Railway.
            </div>
          </article>
          <article className="relative grid md:grid-cols-5 md:gap-10 before:content-[''] mx-12 before:block before:h-full before:absolute before:left-[-25px] md:before:left-[-37px] before:border-l-2 before:border-gray-300 dark:before:border-gray-700 md:space-x-4 pb-8 md:pb-12">
            <div className="relative pb-12 md:col-span-2">
              <div className="sticky top-28">
                <svg
                  className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 className="p-0 m-0 text-[1.4rem]">
                  {translate('second left table')}
                </h3>
                <a
                  target={'_blank'}
                  href="https://www.udemy.com/course/master-completo-java-de-cero-a-experto/"
                  className="p-0 m-0"
                  rel="noreferrer"
                >
                  Udemy (Andrés José Guzmán){' '}
                </a>
                <p className="p-0 m-0 text-sm text-gray-500">
                  10/2022 -{' '}
                  <span className="font-bold">{translate('progress')}</span>
                </p>
              </div>
            </div>
            <div className="relative text-base pb-6 -mt-6 md:border-b md:border-gray-300 md:dark:border-gray-400 md:col-span-3">
              {translate('second right table')}
            </div>
          </article>
          <article className="relative grid md:grid-cols-5 md:gap-10 before:content-[''] mx-12 before:block before:h-full before:absolute before:left-[-25px] md:before:left-[-37px] before:border-l-2 before:border-gray-300 dark:before:border-gray-700 md:space-x-4 pb-10 -pt-2">
            <div className="relative -mt-7 md:pb-11 pb-12 md:col-span-2">
              <div className="sticky top-28">
                <svg
                  className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 className="p-0 m-0 text-[1.4rem]">
                  {translate('third left table')}
                </h3>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://platzi.com/escuela/escuela-web/"
                  className="p-0 m-0"
                >
                  Platzi
                </a>
                <p className="p-0 m-0 text-sm font-bold text-gray-500">
                  {translate('progress')}
                </p>
              </div>
            </div>
            <div className="relative text-base mb-[2.9rem] -mt-[1.3rem] md:border-b md:border-gray-300 md:dark:border-gray-400 md:col-span-3">
              {translate('third right table')}
            </div>
          </article>
        </div>
        <button
          aria-label="button"
          type="button"
          className="group inline-flex items-center rounded-full px-6 py-2 font-semibold transition bg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700"
          onClick={() => window.location.href = '/Garma-Nazareno-CV.pdf'}
        >
          {translate('resume view')}
          <svg
            className="mt-0.5 ml-2 -mr-1 stroke-2 stroke-white dark:stroke-midnight"
            fill="none"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <path
              className="transition opacity-0 group-hover:opacity-100"
              d="M0 5h7"
            ></path>
            <path
              className="transition group-hover:translate-x-[3px]"
              d="M1 1l4 4-4 4"
            ></path>
          </svg>
        </button>
      </div>
      <hr className="my-11 pt-1 sm:pt-0 lg:pt-0 lg:pb-16 w-full border-none text-center h-10 before:content-[''] before:text-[#D1D5DB] before:text-2xl"></hr>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3">
          <h2 className="mb-3 -mt-[.1rem]">{translate('interested tools')}</h2>
          <p>{translate('interested tools sentence')}</p>
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => push('/toolbox')}
          >
            {translate('checkout toolbox')}
        
          </Button>
        </div>
        <div className="col-span-2 pb-2  ">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="cover"
            src="https://res.cloudinary.com/dchmunlh6/image/upload/v1672213458/mytools_laf3eo.webp"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dchmunlh6/image/upload/v1672213458/mytools_laf3eo.webp"
            width={350}
            height={300}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about']))
    }
  };
}
