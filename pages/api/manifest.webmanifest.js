// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nextManifest = (req, res) => {
  res.status(200).json({
    "name": "PWA-sample-kaios-next",
    "description": "Next.JS Progressive Web App",
    "developer": {
      "name": "KaiOS",
      "url": "http://kaiostech.com"
    },
    "short_name": "Next PWA",
    "theme_color": "#ffffff",
    "background_color": "#004740",
    "display": "fullscreen",
    "orientation": "portrait",
    "scope": "/",
    "start_url": "/",
    "icons": [
      {
        "src": "/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "splash_pages": null,
    "b2g_features": {
      "developer": {
        "name": "kaios",
        "url": "http://storepwa.github.io"
      }
    }
  })
}

export default nextManifest
