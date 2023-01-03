import { Container } from 'layouts/Container';
import { i18n, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Projects() {
  const { t: translate } = useTranslation('projects');
  return (
    <Container title={translate('page title')}>
      <h1>
        <span className="block max-w-2xl mt-3  mx-auto text-4xl font-bold leading-10 text-center sm:text-5xl">
          {translate('projects title')}
        </span>
      </h1>

      <div className="-mt-[.9rem] mb-[2rem]">
        <p className="text-[.87rem] text-center font-[100] text-black dark:text-white">
          {translate('project paragraph')}
        </p>
      </div>

      <div className="space-y-[.9rem]">
        <div
          className="max-w-full lg:flex border border-gray-400 bg-white dark:border-gray-700  dark:bg-dark  rounded-b hover:transition duration-300 cursor-pointer hover:scale-105 space-y-10
      "
          onClick={() => {
            window.open('https://nzzareno.github.io/CONVERSOR-MONEDAS/');
          }}
        >
          <div className="p-4 w-[100%] flex flex-col justify-between leading-normal  ">
            <div className="mb-3">
              <div className="font-bold text-xl mb-2 dark:text-white">
                {translate('first project title')}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {translate('first project sentence')}
              </p>
            </div>
            <div>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #html
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #css
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700">
                #javascript
              </span>
            </div>
          </div>
        </div>
        <br />

        <div
          onClick={() => {
            window.open('https://nzzareno.github.io/carvel-ecommerce/');
          }}
          className="max-w-full lg:flex border border-gray-400 bg-white  dark:border-gray-700  dark:bg-dark rounded-b hover:transition duration-300 cursor-pointer hover:scale-105"
        >
          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-3">
              <div className="font-bold text-xl mb-2 dark:text-white">
                {translate('second project title')}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {translate('second project sentence')}
              </p>
            </div>
            <div>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #firebase
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #sass
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 ">
                #react
              </span>
            </div>
          </div>
        </div>

        <br />

        <div
          onClick={() => {
            window.open('https://onecomfort.up.railway.app/');
          }}
          className="max-w-full lg:flex border border-gray-400  dark:border-gray-700  dark:bg-dark bg-white rounded-b hover:transition duration-300 cursor-pointer hover:scale-105"
        >
          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-3">
              <div className="font-bold text-xl mb-2 dark:text-white">
                {translate('third project title')}
              </div>
              <p className="text-gray-600       dark:text-gray-300   text-base">
                {translate('third project sentence')}
              </p>
            </div>
            <div className="flex items-center justify-start">
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #mern
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #websockets
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #paypal
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700">
                #OAuth
              </span>
            </div>
          </div>
        </div>

        <br />

        <div
          onClick={() => {
            window.open('https://password-generator-x.vercel.app/');
          }}
          className="max-w-full mb-6 lg:flex border border-gray-400  dark:border-gray-700  dark:bg-dark bg-white rounded-b hover:transition duration-300 cursor-pointer hover:scale-105"
        >
          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-3">
              <div className="font-bold text-xl mb-2 dark:text-white">
                {translate('four project title')}
              </div>
              <p className="text-gray-600       dark:text-gray-300   text-base">
                {translate('four project sentence')}
              </p>
            </div>
            <div className="flex items-center justify-start">
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #react
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #typescript
              </span>
              <span className="inline-block bg-gray-200 dark:bg-[#182446] rounded-full px-3 py-1 text-xs font-semibold dark:text-white text-gray-700 mr-2">
                #chakraui
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects']))
    }
  };
}
