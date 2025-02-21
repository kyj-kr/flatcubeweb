exports.handler = async (event, context) => {
    const userAgent = (event.headers['user-agent'] || '').toLowerCase();
  
    if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod') || userAgent.includes('Macintosh')) {
      return {
        statusCode: 302,
        headers: {
          Location: 'https://apps.apple.com/us/app/id6739634625',
        },
      };
    } else if (userAgent.includes('Android')) {
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
          Location: 'https://play.google.com/store/apps/details?id=com.redev.FlatCube', // 기본 리디렉션
        },
      };
    }
  };
  