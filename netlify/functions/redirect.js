exports.handler = async (event, context) => {
    const userAgent = (event.headers['user-agent'] || '').toLowerCase();
  
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('macintosh')) {
      return {
        statusCode: 302,
        headers: {
          Location: 'https://apps.apple.com/us/app/id6739634625',
        },
      };
    } else if (userAgent.includes('android')) {
      return {
        statusCode: 302,
        headers: {
          Location: 'https://play.google.com/store/apps/details?id=com.redev.FlatCube',
        },
      };
    } else {
      return {
        statusCode: 302,
        headers: {
          Location: 'https://flatcube.app', // 기본 리디렉션
        },
      };
    }
  };
  