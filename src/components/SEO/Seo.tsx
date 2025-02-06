import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  /** Заголовок страницы */
  title: string;
  /** Описание страницы (используется для meta description, Open Graph и Twitter) */
  description?: string;
  /** Канонический URL страницы */
  canonical?: string;
  /** Ключевые слова страницы */
  keywords?: string;
  /** URL изображения для социальных сетей (Open Graph, Twitter) */
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = 'MultiTool – универсальный инструмент для решения различных задач.',
  canonical,
  keywords,
  image,
}) => {
  const fullTitle = `${title} | MultiTool`;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={fullTitle}
      defaultTitle='MultiTool'
    >
      {/* Базовые метатеги */}
      <meta
        name='description'
        content={description}
      />
      {keywords && (
        <meta
          name='keywords'
          content={keywords}
        />
      )}
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />

      {/* Канонический URL */}
      {canonical && (
        <link
          rel='canonical'
          href={canonical}
        />
      )}

      {/* Open Graph */}
      <meta
        property='og:title'
        content={fullTitle}
      />
      <meta
        property='og:description'
        content={description}
      />
      <meta
        property='og:type'
        content='website'
      />
      {canonical && (
        <meta
          property='og:url'
          content={canonical}
        />
      )}
      <meta
        property='og:site_name'
        content='MultiTool'
      />
      {image && (
        <meta
          property='og:image'
          content={image}
        />
      )}

      {/* Twitter Cards */}
      <meta
        name='twitter:card'
        content={image ? 'summary_large_image' : 'summary'}
      />
      <meta
        name='twitter:title'
        content={fullTitle}
      />
      <meta
        name='twitter:description'
        content={description}
      />
      {image && (
        <meta
          name='twitter:image'
          content={image}
        />
      )}
    </Helmet>
  );
};

export default SEO;

// TO-DO: Write Documentation
