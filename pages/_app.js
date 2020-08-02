import '../public/css/bootstrap.min.css';
import '../public/css/icofont.min.css';
import '../public/css/animate.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-image-lightbox/style.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.scss';
import '../public/css/responsive.scss';

import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import Head from 'next/head';

import GoTop from 'components/Shared/GoTop';
import Loader from 'components/Shared/Loader';

export default (class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Maxeon</title>
          <meta name="description" content="Maxeon" />
          <meta
            name="og:title"
            property="og:title"
            content="Maxeon"
          />
          <meta name="twitter:card" content="Maxeon" />
          <link rel="canonical" href="https://Maxeon.com/" />
        </Head>

        <Preloader>
          <Component {...pageProps} />
          <GoTop scrollStepInPx="50" delayInMs="16.66" />
          <Placeholder>
            <Loader />
          </Placeholder>
        </Preloader>
      </React.Fragment>
    );
  }
});
