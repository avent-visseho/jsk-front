'use client';

import { NextSeo } from 'next-seo';

export default function PageSeo({ seoProps }:any) {
  return <NextSeo {...seoProps} />;
}