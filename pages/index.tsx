import { ButtonType } from '../types/types';
import { Button } from '@/components/Button';
import { Container } from 'layouts/Container';
import Image from 'next/image';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';
import { Footer } from '@/components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { locale, locales } = useRouter();
  const { t: translate } = useTranslation('home');

  return (
    <Container showCircles title={translate('page title')}>
      <div className="-mt-[7rem] ">
        <div>
          <div className="grid items-center grid-cols-1 text-center md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 xlg:col-span-4 text-4xl leading-1 md:leading-normal md:order-1 sm:text-4xl mb-0">
              {translate('first greeting')}
              <span className="text-teal-500 dark:text-teal-400">
                Nazareno <span className="Home_hand__HQYY5">🤚</span>
              </span>
              <br /> {translate('second greeting')}
            </h1>
            <div className="order-1 md:order-2 pr-4">
              <Image
                alt="Nazareno Garma"
                height={150}
                width={150}
                src={siteMetadata.avatarImage}
                placeholder="blur"
                blurDataURL={siteMetadata.avatarImage}
                className="col-span-1 rounded-full "
                layout="fixed"
              />
            </div>
          </div>
          <ul className="MuiBox-root css-10db1jx space-y-[.2rem] mb-[1rem] lg:mb-[1rem] md:mb-[1rem] pt-9 xl:pt-5 lg:pt-5 md:pt-5 sm:pt-9">
            <li
              className="MuiBox-root css-5wehvv"
              style={{ cursor: 'default' }}
            >
              <span className="other-plot">
                <span
                  className="MuiBox-root css-tfcw7n"
                  aria-label="cheese"
                  role="img"
                >
                  ☕
                </span>{' '}
                {translate('sequence coffe')}
              </span>
            </li>
            <li
              className="MuiBox-root css-5wehvv"
              style={{ cursor: 'default' }}
            >
              <div className="other-plot">
                <span
                  className="MuiBox-root css-tfcw7n"
                  aria-label="cheese"
                  role="img"
                >
                  🌎
                </span>{' '}
                {translate('based country')}
              </div>
            </li>
            <li
              className="MuiBox-root css-5wehvv"
              style={{ cursor: 'default' }}
            >
              <span className="other-plot">
                <span
                  className="MuiBox-root  css-tfcw7n"
                  aria-label="cheese"
                  role="img"
                >
                  💼
                </span>{' '}
                {translate('platzi student')}
              </span>
            </li>
            <li
              className="MuiBox-root css-5wehvv"
              style={{ cursor: 'default' }}
            >
              <span className="other-plot">
                <span
                  className="MuiBox-root css-tfcw7n"
                  aria-label="cheese"
                  role="img"
                >
                  📧
                </span>{' '}
                garmatorresnazareno@gmail.com
              </span>
            </li>
          </ul>
          <div className="space-y-6 md:space-y-0 md:space-x-4">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() =>
                (window.location.href = '/Garma-Nazareno-CV.pdf')
              }
            >
              {translate('download cv')}
            </Button>
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() =>
                (window.location.href =
                  'mailto:garmatorresnazareno@gmail.com?subject=Hello Nazareno 👋')
              }
            >
              {translate('contact me')}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home']))
  }
});
