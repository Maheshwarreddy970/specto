import React from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import App from 'next/app';
import '@/app/globals.css'; // Import global styles here

class Bgover extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuroraBackground>
        <Component {...pageProps} />
      </AuroraBackground>
    );
  }
}

export default Bgover;

