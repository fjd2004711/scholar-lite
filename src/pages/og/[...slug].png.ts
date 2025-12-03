import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { SITE } from '../../config';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function getStaticPaths() {
  const publications = await getCollection('publications');
  const team = await getCollection('team');
  const research = await getCollection('research');
  const news = await getCollection('news');
  const activities = await getCollection('activities');
  
  // Define static pages
  const pages = [
    { slug: 'index', title: SITE.labName, subtitle: SITE.description },
    { slug: 'research', title: 'Research', subtitle: 'Our Research Areas' },
    { slug: 'team', title: 'Team', subtitle: 'Meet Our Lab Members' },
    { slug: 'publications', title: 'Publications', subtitle: 'Selected Publications' },
    { slug: 'news', title: 'News', subtitle: 'Latest Updates' },
    { slug: 'join', title: 'Join Us', subtitle: 'Open Positions' },
  ];

  // Generate paths for static pages
  const staticPaths = pages.map(page => ({
    params: { slug: page.slug },
    props: { title: page.title, subtitle: page.subtitle },
  }));

  // Generate paths for dynamic content
  const pubPaths = publications.map(post => {
    const slug = `publications/${post.id.replace(/\.[^/.]+$/, "")}`;
    return {
      params: { slug },
      props: { 
        title: post.data.title, 
        subtitle: `${post.data.venue} ${post.data.year}` 
      },
    };
  });

  const teamPaths = team.map(member => {
    const slug = `team/${member.id.replace(/\.[^/.]+$/, "")}`;
    return {
      params: { slug },
      props: { 
        title: member.data.name, 
        subtitle: member.data.role 
      },
    };
  });

  const researchPaths = research.map(item => {
    const slug = `research/${item.id.replace(/\.[^/.]+$/, "")}`;
    return {
      params: { slug },
      props: { 
        title: item.data.title, 
        subtitle: item.data.description 
      },
    };
  });

  const newsPaths = news.map(item => ({
    params: { slug: `news/${item.id.replace(/\.[^/.]+$/, "")}` },
    props: { 
      title: item.data.title, 
      subtitle: new Date(item.data.date).toLocaleDateString() 
    },
  }));

  const activityPaths = activities.map(item => ({
    params: { slug: `activities/${item.id.replace(/\.[^/.]+$/, "")}` },
    props: { 
      title: item.data.title, 
      subtitle: new Date(item.data.date).toLocaleDateString() 
    },
  }));

  return [
    ...staticPaths, 
    ...pubPaths, 
    ...teamPaths, 
    ...researchPaths, 
    ...newsPaths,
    ...activityPaths
  ];
}

export async function GET({ params, props }: { params: any; props: any }) {
  const { title, subtitle } = props;
  const slug = params.slug || 'index';
  
  // Determine section for icon selection
  const section = slug.split('/')[0];

  // Load local fonts
  const fontData = await readFile(join(process.cwd(), 'public/fonts/Inter-Bold.woff'));
  const regularFontData = await readFile(join(process.cwd(), 'public/fonts/Inter-Regular.woff'));

  // Define icons for each section
  const icons: Record<string, string> = {
    index: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", // Home
    research: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", // Flask
    team: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", // Users
    publications: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", // Book
    news: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z", // Newspaper
    join: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z", // User Plus
    activities: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", // Calendar
  };

  const iconPath = icons[section] || icons[slug] || icons.index;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                padding: '60px 100px',
                borderRadius: '30px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                overflow: 'hidden',
              },
              children: [
                // Top Accent Line
                {
                  type: 'div',
                  props: {
                    style: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '8px',
                      background: 'linear-gradient(90deg, #3182ce 0%, #63b3ed 100%)',
                    },
                  },
                },
                // Icon
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      backgroundColor: '#ebf8ff',
                      color: '#3182ce',
                      marginBottom: '30px',
                    },
                    children: [
                      {
                        type: 'svg',
                        props: {
                          width: '40',
                          height: '40',
                          viewBox: '0 0 24 24',
                          fill: 'none',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          children: [
                            {
                              type: 'path',
                              props: {
                                d: iconPath,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                // Title
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '64px',
                      fontWeight: 700,
                      color: '#1a202c',
                      marginBottom: '16px',
                      textAlign: 'center',
                      letterSpacing: '-0.02em',
                    },
                    children: title,
                  },
                },
                // Subtitle
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '32px',
                      color: '#64748b',
                      textAlign: 'center',
                      maxWidth: '600px',
                      lineHeight: 1.4,
                    },
                    children: subtitle,
                  },
                },
                // Footer Branding
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '50px',
                      paddingTop: '30px',
                      borderTop: '2px solid #f1f5f9',
                      width: '100%',
                      justifyContent: 'center',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#3182ce',
                            marginRight: '12px',
                          },
                        },
                      },
                      {
                          type: 'div',
                          props: {
                            style: {
                              fontSize: '20px',
                              fontWeight: 600,
                              color: '#475569',
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                            },
                            children: SITE.title,
                          },
                        },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    } as any,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: regularFontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const image = resvg.render();

  return new Response(image.asPng() as any, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
